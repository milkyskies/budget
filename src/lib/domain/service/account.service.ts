import { PrismaClient } from '@prisma/client';
import type { CreateAccountDto } from 'src/routes/api/accounts/dto/create-account.dto';
import { AccountEntity } from '../entity/account.entity';
import { EntryEntity } from '../entity/entry.entity';
import type { UpdateAccountDto } from 'src/routes/api/accounts/dto/update-delete.dto';

export class AccountService {
	private constructor(private readonly prisma: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): AccountService {
		return new AccountService(args.prismaClient);
	}

	public async create(args: { account: CreateAccountDto }): Promise<AccountEntity> {
		const prismaAccount = await this.prisma.account.create({
			data: {
				budgetId: args.account.budgetId,
				name: args.account.name,
				type: args.account.type
			},
			include: {
				entries: true
			}
		});

		await this.prisma.entry.create({
			data: {
				amount: args.account.initialBalance,
				type: 'INCOME',
				date: new Date(),
				memo: '初期口座残高',
				accountId: prismaAccount.id
			}
		});

		const account = AccountEntity.fromPrisma({
			account: prismaAccount,
			entries: prismaAccount.entries.map((entry) => EntryEntity.fromPrisma({ entry }).toValues())
		});

		return account;
	}

	public async delete(args: { accountId: string }): Promise<void> {
		await this.prisma.$transaction(async (tx) => {
			await tx.entry.deleteMany({
				where: { accountId: args.accountId }
			});

			await tx.account.delete({
				where: { id: args.accountId }
			});
		});
	}

	public async update(args: { accountId: string; data: UpdateAccountDto }): Promise<AccountEntity> {
		const updatedAccount = await this.prisma.account.update({
			where: { id: args.accountId },
			data: args.data,
			include: { entries: true }
		});

		return AccountEntity.fromPrisma({
			account: updatedAccount,
			entries: updatedAccount.entries.map((entry) => EntryEntity.fromPrisma({ entry }).toValues())
		});
	}
}
