import { CategoryEntity, type CategoryValues } from './category.entity';
import type { EntryItem as PrismaEntryItem } from '@prisma/client';
import { appDayjs } from 'src/lib/app/time/dayjs';

export type EntryItemEntityValues = {
	id: string;
	amount: number;
	categoryId?: string;
	category?: CategoryValues;
	createdAt: Date;
	updatedAt: Date;
};

export class EntryItemEntity {
	public readonly id: string;
	public readonly amount: number;
	public readonly categoryId?: string;
	public readonly category?: CategoryEntity;
	public readonly createdAt: appDayjs.Dayjs;
	public readonly updatedAt: appDayjs.Dayjs;

	private constructor(args: EntryItemEntityValues) {
		this.id = args.id;
		this.amount = args.amount;
		this.categoryId = args.categoryId;
		this.category = args.category ? CategoryEntity.create(args.category) : undefined;
		this.createdAt = appDayjs(args.createdAt);
		this.updatedAt = appDayjs(args.updatedAt);
	}

	public static create(args: EntryItemEntityValues): EntryItemEntity {
		return new EntryItemEntity(args);
	}

	public static fromPrisma(args: {
		prismaEntryItem: PrismaEntryItem;
		category?: CategoryEntity;
	}): EntryItemEntity {
		return EntryItemEntity.create({
			id: args.prismaEntryItem.id,
			amount: args.prismaEntryItem.amount,
			categoryId: args.prismaEntryItem.categoryId ?? undefined,
			category: args.category?.toValues(),
			createdAt: args.prismaEntryItem.createdAt,
			updatedAt: args.prismaEntryItem.updatedAt
		});
	}

	public toValues(): EntryItemEntityValues {
		return {
			id: this.id,
			amount: this.amount,
			categoryId: this.categoryId,
			category: this.category?.toValues(),
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}
}
