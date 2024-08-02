import { appDayjs } from '$lib/app/time/dayjs';
import type { Category as PrismaCategory } from '@prisma/client';
import { EntryItemEntity, type EntryItemEntityValues } from './entry-item.entity';
import { AssignmentEntity, type AssignmentEntityValues } from './assignment.entity';

export type CategoryValues = {
	id: string;
	name: string;
	categoryGroupId: string;
	createdAt: Date;
	updatedAt: Date;
	entryItems?: EntryItemEntityValues[];
	assignments?: AssignmentEntityValues[];
};

export class CategoryEntity {
	public readonly id: string;
	public readonly name: string;
	public readonly categoryGroupId: string;
	public readonly createdAt: appDayjs.Dayjs;
	public readonly updatedAt: appDayjs.Dayjs;
	public readonly entryItems?: EntryItemEntity[];
	public readonly assignments?: AssignmentEntity[];

	private constructor(args: CategoryValues) {
		this.id = args.id;
		this.name = args.name;
		this.categoryGroupId = args.categoryGroupId;
		this.createdAt = appDayjs(args.createdAt);
		this.updatedAt = appDayjs(args.updatedAt);
		this.entryItems = args.entryItems?.map((entry) => EntryItemEntity.create(entry));
		this.assignments = args.assignments?.map((assignment) => AssignmentEntity.create(assignment));
	}

	public static create(args: CategoryValues): CategoryEntity {
		return new CategoryEntity(args);
	}

	public static fromPrisma(args: {
		category: PrismaCategory;
		entryItems?: EntryItemEntity[];
		assignments?: AssignmentEntity[];
	}): CategoryEntity {
		return CategoryEntity.create({
			id: args.category.id,
			name: args.category.name,
			categoryGroupId: args.category.categoryGroupId,
			createdAt: args.category.createdAt,
			updatedAt: args.category.updatedAt,
			entryItems: args.entryItems?.map((entryItem) => entryItem.toValues()),
			assignments: args.assignments?.map((assignment) => assignment.toValues())
		});
	}

	public toValues(): CategoryValues {
		return {
			id: this.id,
			name: this.name,
			categoryGroupId: this.categoryGroupId,
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate(),
			entryItems: this.entryItems?.map((entry) => entry.toValues()),
			assignments: this.assignments?.map((assignment) => assignment.toValues())
		};
	}

	// public get usedAmount(): number {
	// 	return this.entryItems?.reduce((acc, entry) => acc + entry.amount, 0) ?? 0;
	// }

	public getMonthAssignmentAmount(month: appDayjs.Dayjs): number {
		if (!this.assignments) throw new Error('No assignments found');

		const amount = this.assignments
			.filter((assignment) => {
				return assignment.month.isSame(month, 'month');
			})
			.reduce((acc, assignment) => acc + assignment.amount, 0);

		return amount;
	}

	public getMonthUsedAmount(month: appDayjs.Dayjs): number {
		if (!this.entryItems) throw new Error('No entry items found');

		return this.entryItems
			.filter((entry) => entry.createdAt.isSame(month, 'month'))
			.reduce((acc, entry) => acc + entry.amount, 0);
	}

	public getMonthRemainingAmount(month: appDayjs.Dayjs): number {
		return this.getMonthAssignmentAmount(month) - this.getMonthUsedAmount(month);
	}
}
