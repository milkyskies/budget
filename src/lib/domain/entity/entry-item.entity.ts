import { CategoryEntity, type CategoryValues } from './category.entity';
import type { EntryItem as PrismaEntryItem } from '@prisma/client';

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
	public readonly createdAt: Date;
	public readonly updatedAt: Date;

	private constructor(args: EntryItemEntityValues) {
		this.id = args.id;
		this.amount = args.amount;
		this.categoryId = args.categoryId;
		this.category = args.category ? CategoryEntity.create(args.category) : undefined;
		this.createdAt = args.createdAt;
		this.updatedAt = args.updatedAt;
	}

	public static create(args: EntryItemEntityValues): EntryItemEntity {
		return new EntryItemEntity(args);
	}

	public static fromPrisma(args: {
		prismaEntryItem: PrismaEntryItem;
		category?: CategoryValues;
	}): EntryItemEntity {
		return EntryItemEntity.create({
			id: args.prismaEntryItem.id,
			amount: args.prismaEntryItem.amount,
			categoryId: args.prismaEntryItem.categoryId,
			category: args.category ?? undefined,
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
			createdAt: this.createdAt,
			updatedAt: this.updatedAt
		};
	}
}
