import { PrismaClient } from '@prisma/client';
import type { CreateAccountDto } from 'src/routes/api/accounts/post/dto/create-account.dto';
import { AccountEntity } from '../entity/account.entity';

export class AccountService {
	private constructor(private readonly prisma: PrismaClient) {}

	public static new(prisma: PrismaClient): AccountService {
		return new AccountService(prisma);
	}

	public async create(args: CreateAccountDto): Promise<AccountEntity> {
		const prismaAccount = await this.prisma.account.create({
			data: {
				budgetId: args.budgetId,
				name: args.name,
				type: args.type,
				balance: args.balance
			}
		});

		const account = AccountEntity.fromPrisma(prismaAccount);

		return account;
	}
}
