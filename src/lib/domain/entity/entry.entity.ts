import dayjs from '$lib/app/time/dayjs';
import type { Entry as PrismaEntry } from '@prisma/client';

export type EntryValues = {
	id: string;
	amount: number;
	date: Date;
	payee: string;
	memo: string;
	categoryId: string;
	createdAt: Date;
	updatedAt: Date;
};

// I originally wanted to use the word "transaction", but it's a keyword in DBs
export class EntryEntity {
	public readonly id: string;
	public readonly amount: number;
	public readonly date: Date;
	public readonly payee: string;
	public readonly memo: string;
	public readonly categoryId: string;
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;

	private constructor(args: EntryValues) {
		this.id = args.id;
		this.amount = args.amount;
		this.date = args.date;
		this.payee = args.payee;
		this.memo = args.memo;
		this.categoryId = args.categoryId;
		this.createdAt = dayjs(args.createdAt);
		this.updatedAt = dayjs(args.updatedAt);
	}

	public static create(args: EntryValues): EntryEntity {
		return new EntryEntity(args);
	}

	public static fromPrisma(args: { transaction: PrismaEntry }): EntryEntity {
		return EntryEntity.create({
			id: args.transaction.id,
			amount: args.transaction.amount,
			date: args.transaction.date,
			payee: args.transaction.payee,
			memo: args.transaction.memo,
			categoryId: args.transaction.categoryId,
			createdAt: args.transaction.createdAt,
			updatedAt: args.transaction.updatedAt
		});
	}

	public toValues(): EntryValues {
		return {
			id: this.id,
			amount: this.amount,
			date: this.date,
			payee: this.payee,
			memo: this.memo,
			categoryId: this.categoryId,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}
}
