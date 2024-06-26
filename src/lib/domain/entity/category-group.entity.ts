import dayjs from '$lib/app/time/dayjs';
import type { CategoryGroup as PrismaCategoryGroup } from '@prisma/client';
import { CategoryEntity, type CategoryValues } from './category.entity';

export type CategoryGroupValues = {
	id: string;
	name: string;
	budgetId: string;
	categories: CategoryValues[];
	createdAt: Date;
	updatedAt: Date;
};

export class CategoryGroupEntity {
	public readonly id: string;
	public readonly name: string;
	public readonly budgetId: string;
	public readonly categories: CategoryEntity[];
	public readonly createdAt: dayjs.Dayjs;
	public readonly updatedAt: dayjs.Dayjs;

	private constructor(args: CategoryGroupValues) {
		this.id = args.id;
		this.name = args.name;
		this.budgetId = args.budgetId;
		this.categories = args.categories.map((category) => CategoryEntity.create(category));
		this.createdAt = dayjs(args.createdAt);
		this.updatedAt = dayjs(args.updatedAt);
	}

	public static create(args: CategoryGroupValues): CategoryGroupEntity {
		return new CategoryGroupEntity(args);
	}

	public static fromPrisma(args: {
		categoryGroup: PrismaCategoryGroup;
		categories: CategoryValues[];
	}): CategoryGroupEntity {
		return CategoryGroupEntity.create({
			id: args.categoryGroup.id,
			name: args.categoryGroup.name,
			budgetId: args.categoryGroup.budgetId,
			categories: args.categories,
			createdAt: args.categoryGroup.createdAt,
			updatedAt: args.categoryGroup.updatedAt
		});
	}

	public toValues(): CategoryGroupValues {
		return {
			id: this.id,
			name: this.name,
			budgetId: this.budgetId,
			categories: this.categories.map((category) => category.toValues()),
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}

	public get totalAssignedAmount(): number {
		return this.categories.reduce((sum, category) => sum + category.assignedAmount, 0);
	}

	public get totalUsedAmount(): number {
		return this.categories.reduce((sum, category) => sum + category.usedAmount, 0);
	}

	public get totalRemainingAmount(): number {
		return this.totalAssignedAmount - this.totalUsedAmount;
	}
}
