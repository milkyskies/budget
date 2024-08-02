import { appDayjs } from '$lib/app/time/dayjs';
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
	public readonly createdAt: appDayjs.Dayjs;
	public readonly updatedAt: appDayjs.Dayjs;

	private constructor(args: CategoryGroupValues) {
		this.id = args.id;
		this.name = args.name;
		this.budgetId = args.budgetId;
		this.categories = args.categories.map((category) => CategoryEntity.create(category));
		this.createdAt = appDayjs(args.createdAt);
		this.updatedAt = appDayjs(args.updatedAt);
	}

	public static create(args: CategoryGroupValues): CategoryGroupEntity {
		return new CategoryGroupEntity(args);
	}

	public static fromPrisma(args: {
		categoryGroup: PrismaCategoryGroup;
		categories: CategoryEntity[];
	}): CategoryGroupEntity {
		return CategoryGroupEntity.create({
			id: args.categoryGroup.id,
			name: args.categoryGroup.name,
			budgetId: args.categoryGroup.budgetId,
			categories: args.categories.map((category) => category.toValues()),
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

	public getMonthAssignmentAmount(month: appDayjs.Dayjs): number {
		return this.categories.reduce(
			(sum, category) => sum + category.getMonthAssignmentAmount(month),
			0
		);
	}

	public getMonthUsedAmount(month: appDayjs.Dayjs): number {
		return this.categories.reduce((sum, category) => sum + category.getMonthUsedAmount(month), 0);
	}

	public getMonthRemainingAmount(month: appDayjs.Dayjs): number {
		return this.getMonthAssignmentAmount(month) - this.getMonthUsedAmount(month);
	}
}
