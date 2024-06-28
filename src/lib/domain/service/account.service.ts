import { PrismaClient } from '@prisma/client';
import type { CreateAccountDto } from 'src/routes/api/accounts/_dto/create-account.dto';
import { AccountEntity } from '../entity/account.entity';
import { EntryEntity } from '../entity/entry.entity';
import type { UpdateAccountDto } from 'src/routes/api/accounts/_dto/update-delete.dto';
import { createId } from '@paralleldrive/cuid2';
import { EntryItemEntity } from '../entity/entry-item.entity';
import { CategoryEntity } from '../entity/category.entity';

export class AccountService {
	private constructor(private readonly prisma: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): AccountService {
		return new AccountService(args.prismaClient);
	}

	public async create(args: { account: CreateAccountDto }): Promise<AccountEntity> {
		const entry = await this.prisma.entry.create({
			data: {
				id: createId(),
				type: 'INCOME',
				date: new Date(),
				memo: '初期口座残高',
				entryItems: {
					create: [
						{
							id: createId(),
							amount: args.account.initialBalance
						}
					]
				},
				account: {
					create: {
						id: createId(),
						name: args.account.name,
						type: args.account.type,
						budgetId: args.account.budgetId
					}
				}
			},
			include: {
				entryItems: {
					include: {
						category: true
					}
				},
				account: true
			}
		});

		const account = AccountEntity.fromPrisma({
			prismaAccount: entry.account,
			entries: [
				EntryEntity.fromPrisma({
					prismaEntry: entry,
					entryItems: entry.entryItems.map((entryItem) =>
						EntryItemEntity.fromPrisma({
							prismaEntryItem: entryItem
						})
					)
				})
			]
		});

		return account;
	}

	public async delete(args: { accountId: string }): Promise<void> {
		await this.prisma.account.delete({
			where: { id: args.accountId }
		});
	}

	public async update(args: { accountId: string; data: UpdateAccountDto }): Promise<AccountEntity> {
		const updatedAccount = await this.prisma.account.update({
			where: { id: args.accountId },
			data: args.data,
			include: {
				entries: {
					include: {
						entryItems: true
					}
				}
			}
		});

		return AccountEntity.fromPrisma({
			prismaAccount: updatedAccount,
			entries: updatedAccount.entries.map((entry) =>
				EntryEntity.fromPrisma({
					prismaEntry: entry,
					entryItems: entry.entryItems.map((entryItem) =>
						EntryItemEntity.fromPrisma({ prismaEntryItem: entryItem })
					)
				})
			)
		});
	}
}
