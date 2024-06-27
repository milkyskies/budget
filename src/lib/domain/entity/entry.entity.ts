import dayjs from '$lib/app/time/dayjs';
import type { EntryType, Entry as PrismaEntry } from '@prisma/client';
import { AccountEntity, type AccountValues } from './account.entity';
import { CategoryEntity, type CategoryValues } from './category.entity';
import { ExternalPartyEntity, type ExternalPartyValues } from './external-party.entity';

export type EntryValues = {
	id: string;
	amount: number;
	type: EntryType;
	date: Date;
	memo: string;
	categoryId?: string;
	category?: CategoryValues;
	accountId: string;
	account?: AccountValues;
	destinationAccountId?: string; // For transfers
	destinationAccount?: AccountValues; // For transfers
	externalPartyId?: string;
	externalParty?: ExternalPartyValues;
	createdAt: Date;
	updatedAt: Date;
};

// I originally wanted to use the word "entry", but it's a keyword in DBs
export class EntryEntity {
	public readonly id: string;
	public readonly amount: number;
	public readonly type: EntryType;
	public readonly date: Date;
	public readonly memo: string;
	public readonly categoryId?: string;
	public readonly category?: CategoryEntity;
	public readonly accountId: string;
	public readonly account?: AccountEntity;
	public readonly destinationAccountId?: string;
	public readonly destinationAccount?: AccountEntity;
	public readonly externalPartyId?: string;
	public readonly externalParty?: ExternalPartyEntity;
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;

	private constructor(args: EntryValues) {
		this.id = args.id;
		this.amount = args.amount;
		this.type = args.type;
		this.date = args.date;
		this.memo = args.memo;
		this.accountId = args.accountId;

		this.account = args.account ? AccountEntity.create(args.account) : undefined;

		this.destinationAccountId = args.destinationAccountId;

		this.destinationAccount = args.destinationAccount
			? AccountEntity.create(args.destinationAccount)
			: undefined;

		this.externalPartyId = args.externalPartyId;

		this.externalParty = args.externalParty
			? ExternalPartyEntity.create(args.externalParty)
			: undefined;

		this.destinationAccountId = args.destinationAccountId;
		this.externalPartyId = args.externalPartyId;
		this.categoryId = args.categoryId;
		this.category = args.category ? CategoryEntity.create(args.category) : undefined;
		this.createdAt = dayjs(args.createdAt);
		this.updatedAt = dayjs(args.updatedAt);
	}

	public static create(args: EntryValues): EntryEntity {
		return new EntryEntity(args);
	}

	public static fromPrisma(args: {
		entry: PrismaEntry;
		category?: CategoryValues;
		account?: AccountValues;
		destinationAccount?: AccountValues;
		externalParty?: ExternalPartyValues;
	}): EntryEntity {
		return EntryEntity.create({
			id: args.entry.id,
			amount: args.entry.amount,
			type: args.entry.type,
			date: args.entry.date,
			memo: args.entry.memo,
			categoryId: args.entry.categoryId ?? undefined,
			category: args.category ?? undefined,
			accountId: args.entry.accountId,
			account: args.account ?? undefined,
			destinationAccountId: args.entry.destinationAccountId ?? undefined,
			destinationAccount: args.destinationAccount ?? undefined,
			externalPartyId: args.entry.externalPartyId ?? undefined,
			externalParty: args.externalParty ?? undefined,
			createdAt: args.entry.createdAt,
			updatedAt: args.entry.updatedAt
		});
	}

	public toValues(): EntryValues {
		return {
			id: this.id,
			amount: this.amount,
			type: this.type,
			date: this.date,
			memo: this.memo,
			categoryId: this.categoryId,
			category: this.category?.toValues(),
			accountId: this.accountId,
			account: this.account?.toValues(),
			destinationAccountId: this.destinationAccountId,
			destinationAccount: this.destinationAccount?.toValues(),
			externalPartyId: this.externalPartyId,
			externalParty: this.externalParty?.toValues(),
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}
}
