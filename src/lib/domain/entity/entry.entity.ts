import dayjs from '$lib/app/time/dayjs';
import type { Entry as PrismaEntry } from '@prisma/client';
import { CategoryEntity, type CategoryValues } from './category.entity';

export type EntryValues = {
	id: string;
	amount: number;
	date: Date;
	payee: string;
	memo: string;
	categoryId: string;
	category?: CategoryValues;
	createdAt: Date;
	updatedAt: Date;
};

// I originally wanted to use the word "entry", but it's a keyword in DBs
export class EntryEntity {
	public readonly id: string;
	public readonly amount: number;
	public readonly date: Date;
	public readonly payee: string;
	public readonly memo: string;
	public readonly categoryId: string;
	public readonly category?: CategoryEntity;
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
		this.category = args.category ? CategoryEntity.create(args.category) : undefined;
	}

	public static create(args: EntryValues): EntryEntity {
		return new EntryEntity(args);
	}

	public static fromPrisma(args: { entry: PrismaEntry; category?: CategoryValues }): EntryEntity {
		return EntryEntity.create({
			id: args.entry.id,
			amount: args.entry.amount,
			date: args.entry.date,
			payee: args.entry.payeeId ?? '', // TODO
			memo: args.entry.memo,
			categoryId: args.entry.categoryId,
			createdAt: args.entry.createdAt,
			updatedAt: args.entry.updatedAt,
			category: args.category
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
			updatedAt: this.updatedAt.toDate(),
			category: this.category?.toValues()
		};
	}
}
