import { appDayjs } from '$lib/app/time/dayjs';
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
	public readonly createdAt: appDayjs.Dayjs;
	public readonly updatedAt: appDayjs.Dayjs;
	public readonly entries?: EntryEntity[];

	private constructor(values: AccountValues) {
		this.id = values.id;
		this.name = values.name;
		this.budgetId = values.budgetId;
		this.type = values.type;
		this.createdAt = appDayjs(values.createdAt);
		this.updatedAt = appDayjs(values.updatedAt);
		this.entries = values.entries?.map((entry) => EntryEntity.create(entry));
	}

	public static create(values: AccountValues): AccountEntity {
		return new AccountEntity(values);
	}

	public static fromPrisma(args: {
		prismaAccount: PrismaAccount;
		entries?: EntryEntity[];
		receivingEntries?: EntryEntity[];
	}): AccountEntity {
		const totalEntries = [
			...(args.entries ? args.entries.map((entry) => entry.toValues()) : []),
			...(args.receivingEntries ? args.receivingEntries.map((entry) => entry.toValues()) : [])
		];

		return AccountEntity.create({
			id: args.prismaAccount.id,
			name: args.prismaAccount.name,
			budgetId: args.prismaAccount.budgetId,
			type: args.prismaAccount.type,
			createdAt: args.prismaAccount.createdAt,
			updatedAt: args.prismaAccount.updatedAt,
			entries: totalEntries
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

		return this.entries.reduce((sum, entry) => {
			if (entry.type === 'INCOME') {
				return sum + entry.entryItems.reduce((itemSum, item) => itemSum + item.amount, 0);
			}

			return sum;
		}, 0);
	}

	public get outgoingSum(): number {
		if (!this.entries) throw new Error('Entires not loaded');

		return this.entries.reduce((sum, entry) => {
			if (entry.type === 'EXPENSE') {
				return sum + entry.entryItems.reduce((itemSum, item) => itemSum + item.amount, 0);
			}

			return sum;
		}, 0);
	}

	public get transferInSum(): number {
		if (!this.entries) throw new Error('Entries not loaded');

		return this.entries.reduce((sum, entry) => {
			if (entry.type === 'TRANSFER' && entry.destinationAccountId === this.id) {
				return sum + entry.entryItems.reduce((itemSum, item) => itemSum + item.amount, 0);
			}

			return sum;
		}, 0);
	}

	public get transferOutSum(): number {
		if (!this.entries) throw new Error('Entries not loaded');

		return this.entries.reduce((sum, entry) => {
			if (entry.type === 'TRANSFER' && entry.accountId === this.id) {
				return sum + entry.entryItems.reduce((itemSum, item) => itemSum + item.amount, 0);
			}

			return sum;
		}, 0);
	}

	public get balance(): number {
		return this.incomingSum - this.outgoingSum + this.transferInSum - this.transferOutSum;
	}
}
