import dayjs from '$lib/app/time/dayjs';
import type { Category as PrismaCategory } from '@prisma/client';
import { EntryEntity, type EntryValues } from './entry.entity';
import { EntryItemEntity, type EntryItemEntityValues } from './entry-item.entity';

export type CategoryValues = {
	id: string;
	name: string;
	categoryGroupId: string;
	assignedAmount: number;
	createdAt: Date;
	updatedAt: Date;
	entryItems?: EntryItemEntityValues[];
};

export class CategoryEntity {
	public readonly id: string;
	public readonly name: string;
	public readonly categoryGroupId: string;
	public readonly assignedAmount: number;
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;
	public readonly entryItems?: EntryItemEntity[];

	private constructor(args: CategoryValues) {
		this.id = args.id;
		this.name = args.name;
		this.categoryGroupId = args.categoryGroupId;
		this.assignedAmount = args.assignedAmount;
		this.createdAt = dayjs(args.createdAt);
		this.updatedAt = dayjs(args.updatedAt);
		this.entryItems = args.entryItems?.map((entry) => EntryItemEntity.create(entry));
	}

	public static create(args: CategoryValues): CategoryEntity {
		return new CategoryEntity(args);
	}

	public static fromPrisma(args: {
		category: PrismaCategory;
		entryItems?: EntryItemEntityValues[];
	}): CategoryEntity {
		return CategoryEntity.create({
			id: args.category.id,
			name: args.category.name,
			categoryGroupId: args.category.categoryGroupId,
			assignedAmount: args.category.assignedAmount,
			createdAt: args.category.createdAt,
			updatedAt: args.category.updatedAt,
			entryItems: args.entryItems
		});
	}

	public toValues(): CategoryValues {
		return {
			id: this.id,
			name: this.name,
			categoryGroupId: this.categoryGroupId,
			assignedAmount: this.assignedAmount,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate(),
			entryItems: this.entryItems?.map((entry) => entry.toValues())
		};
	}

	public get usedAmount(): number {
		return this.entryItems?.reduce((acc, entry) => acc + entry.amount, 0) ?? 0;
	}

	public get remainingAmount(): number {
		return this.assignedAmount - this.usedAmount;
	}
}
