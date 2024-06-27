import dayjs from '$lib/app/time/dayjs';
import type { AccountType, Account as PrismaAccount } from '@prisma/client';
import { EntryEntity, type EntryValues } from './entry.entity';

export type AccountValues = {
	id: string;
	name: string;
	budgetId: string;
	type: AccountType;
	createdAt: Date;
	updatedAt: Date;
	entries?: EntryValues[];
};

export class AccountEntity {
	public readonly id: string;
	public readonly name: string;
	public readonly budgetId: string;
	public readonly type: AccountType;
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;
	public readonly entries?: EntryEntity[];

	private constructor(values: AccountValues) {
		this.id = values.id;
		this.name = values.name;
		this.budgetId = values.budgetId;
		this.type = values.type;
		this.createdAt = dayjs(values.createdAt);
		this.updatedAt = dayjs(values.updatedAt);
		this.entries = values.entries?.map((entry) => EntryEntity.create(entry));
	}

	public static create(values: AccountValues): AccountEntity {
		return new AccountEntity(values);
	}

	public static fromPrisma(args: {
		account: PrismaAccount;
		entries: EntryValues[];
	}): AccountEntity {
		return AccountEntity.create({
			id: args.account.id,
			name: args.account.name,
			budgetId: args.account.budgetId,
			type: args.account.type,
			createdAt: args.account.createdAt,
			updatedAt: args.account.updatedAt,
			entries: args.entries
		});
	}

	public toValues(): AccountValues {
		return {
			id: this.id,
			name: this.name,
			budgetId: this.budgetId,
			type: this.type,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate(),
			entries: this.entries?.map((entry) => entry.toValues())
		};
	}

	public get incomingSum(): number {
		if (!this.entries) throw new Error('Entires not loaded');

		return this.entries.reduce(
			(sum, entry) => (entry.type === 'INCOME' ? sum + entry.amount : sum),
			0
		);
	}

	public get outgoingSum(): number {
		if (!this.entries) throw new Error('Entires not loaded');

		return this.entries.reduce(
			(sum, entry) => (entry.type === 'EXPENSE' ? sum + entry.amount : sum),
			0
		);
	}

	public get transferInSum(): number {
		if (!this.entries) throw new Error('Entires not loaded');

		return this.entries.reduce(
			(sum, entry) =>
				entry.type === 'TRANSFER' && entry.destinationAccountId ? sum + entry.amount : sum,
			0
		);
	}

	public get transferOutSum(): number {
		if (!this.entries) throw new Error('Entires not loaded');

		return this.entries.reduce(
			(sum, entry) =>
				entry.type === 'TRANSFER' && entry.destinationAccountId ? sum + entry.amount : sum,
			0
		);
	}

	public get balance(): number {
		return this.incomingSum - this.outgoingSum - this.transferInSum + this.transferOutSum;
	}
}
