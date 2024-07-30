import type { EntryType, Entry as PrismaEntry, EntrySystemType } from '@prisma/client';
import { AccountEntity, type AccountValues } from './account.entity';
import {
	EntryItemEntity,
	type EntryItemEntityValues as EntryItemValues
} from './entry-item.entity';
import { ExternalPartyEntity, type ExternalPartyValues } from './external-party.entity';
import { appDayjs } from '$lib/app/time/dayjs';

export type EntryValues = {
	id: string;
	type: EntryType;
	systemType: EntrySystemType;
	date: Date;
	memo: string;
	accountId: string;
	account?: AccountValues;
	destinationAccountId?: string; // For transfers
	destinationAccount?: AccountValues; // For transfers
	externalPartyId?: string;
	externalParty?: ExternalPartyValues;
	entryItems: EntryItemValues[];
	createdAt: Date;
	updatedAt: Date;
};

// I originally wanted to use the word "entry", but it's a keyword in DBs
export class EntryEntity {
	public readonly id: string;
	public readonly type: EntryType;
	public readonly systemType: EntrySystemType;
	public readonly date: appDayjs.Dayjs;
	public readonly memo: string;
	public readonly accountId: string;
	public readonly account?: AccountEntity;
	public readonly destinationAccountId?: string;
	public readonly destinationAccount?: AccountEntity;
	public readonly entryItems: EntryItemEntity[];
	public readonly externalPartyId?: string;
	public readonly externalParty?: ExternalPartyEntity;
	public readonly createdAt: appDayjs.Dayjs;
	public readonly updatedAt: appDayjs.Dayjs;

	private constructor(args: EntryValues) {
		this.id = args.id;
		this.type = args.type;
		this.systemType = args.systemType;
		this.date = appDayjs(args.date);
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

		this.entryItems = args.entryItems.map((item) => EntryItemEntity.create(item));

		this.createdAt = appDayjs(args.createdAt);
		this.updatedAt = appDayjs(args.updatedAt);
	}

	public static create(args: EntryValues): EntryEntity {
		return new EntryEntity(args);
	}

	public static fromPrisma(args: {
		prismaEntry: PrismaEntry;
		entryItems: EntryItemEntity[];
		account?: AccountEntity;
		destinationAccount?: AccountEntity;
		externalParty?: ExternalPartyEntity;
	}): EntryEntity {
		return EntryEntity.create({
			id: args.prismaEntry.id,
			type: args.prismaEntry.type,
			systemType: args.prismaEntry.systemType,
			date: args.prismaEntry.date,
			memo: args.prismaEntry.memo,
			accountId: args.prismaEntry.accountId,
			account: args.account?.toValues(),
			destinationAccountId: args.prismaEntry.destinationAccountId ?? undefined,
			destinationAccount: args.destinationAccount?.toValues(),
			externalPartyId: args.prismaEntry.externalPartyId ?? undefined,
			externalParty: args.externalParty ?? undefined,
			entryItems: args.entryItems.map((entryItem) => entryItem.toValues()),
			createdAt: args.prismaEntry.createdAt,
			updatedAt: args.prismaEntry.updatedAt
		});
	}

	public toValues(): EntryValues {
		return {
			id: this.id,
			type: this.type,
			systemType: this.systemType,
			date: this.date.toDate(),
			memo: this.memo,
			accountId: this.accountId,
			account: this.account?.toValues(),
			destinationAccountId: this.destinationAccountId,
			destinationAccount: this.destinationAccount?.toValues(),
			externalPartyId: this.externalPartyId,
			externalParty: this.externalParty?.toValues(),
			entryItems: this.entryItems.map((item) => item.toValues()),
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}

	public get totalAmount(): number {
		return this.entryItems.reduce((acc, item) => acc + item.amount, 0);
	}

	public getTransferSign(args: { currentAccount: AccountEntity }): -1 | 1 {
		if (this.type !== 'TRANSFER') throw new Error('Not a transfer');

		if (this.accountId === args.currentAccount.id) {
			return 1;
		} else if (this.destinationAccountId === args.currentAccount.id) {
			return -1;
		} else {
			throw new Error('Invalid transfer');
		}
	}

	public getTransactionSign(): -1 | 1 {
		if (this.type !== 'EXPENSE' && this.type !== 'INCOME') {
			throw new Error('Not a transaction');
		}

		return this.type === 'EXPENSE' ? -1 : 1;
	}
}
