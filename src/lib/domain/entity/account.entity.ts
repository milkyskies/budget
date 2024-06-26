import dayjs from '$lib/app/time/dayjs';
import type { Account as PrismaAccount } from '@prisma/client';

export type AccountValues = {
	id: string;
	name: string;
	balance: number;
	budgetId: string;
	createdAt: Date;
	updatedAt: Date;
};

export class AccountEntity {
	public readonly id: string;
	public readonly name: string;
	public readonly balance: number;
	public readonly budgetId: string;
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;

	private constructor(values: AccountValues) {
		this.id = values.id;
		this.name = values.name;
		this.balance = values.balance;
		this.budgetId = values.budgetId;
		this.createdAt = dayjs(values.createdAt);
		this.updatedAt = dayjs(values.updatedAt);
	}

	public static create(values: AccountValues): AccountEntity {
		return new AccountEntity(values);
	}

	public static fromPrisma(account: PrismaAccount): AccountEntity {
		return AccountEntity.create({
			id: account.id,
			name: account.name,
			balance: account.balance,
			budgetId: account.budgetId,
			createdAt: account.createdAt,
			updatedAt: account.updatedAt
		});
	}

	public toValues(): AccountValues {
		return {
			id: this.id,
			name: this.name,
			balance: this.balance,
			budgetId: this.budgetId,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}
}
