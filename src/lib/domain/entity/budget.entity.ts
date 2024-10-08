import { appDayjs } from '$lib/app/time/dayjs';
import type { Budget as PrismaBudget } from '@prisma/client';
import { AccountEntity, type AccountValues } from './account.entity';
import { CategoryGroupEntity, type CategoryGroupValues } from './category-group.entity';

export type BudgetValues = {
	id: string;
	name: string;
	userId: string;
	categoryGroups: CategoryGroupValues[];
	accounts: AccountValues[];
	createdAt: Date;
	updatedAt: Date;
};

export class BudgetEntity {
	public readonly id: string;
	public readonly name: string;
	public readonly userId: string;
	public readonly categoryGroups: CategoryGroupEntity[];
	public readonly accounts: AccountEntity[];
	public readonly createdAt: appDayjs.Dayjs;
	public readonly updatedAt: appDayjs.Dayjs;

	private constructor(args: BudgetValues) {
		this.id = args.id;
		this.name = args.name;
		this.userId = args.userId;

		this.categoryGroups = args.categoryGroups.map((categoryGroup) =>
			CategoryGroupEntity.create(categoryGroup)
		);

		this.accounts = args.accounts.map((account) => AccountEntity.create(account));
		this.createdAt = appDayjs(args.createdAt);
		this.updatedAt = appDayjs(args.updatedAt);
	}

	public static create(args: BudgetValues): BudgetEntity {
		return new BudgetEntity(args);
	}

	public static fromPrisma(args: {
		budget: PrismaBudget;
		categoryGroups: CategoryGroupEntity[];
		accounts: AccountEntity[];
	}): BudgetEntity {
		return BudgetEntity.create({
			id: args.budget.id,
			name: args.budget.name,
			userId: args.budget.userId,
			categoryGroups: args.categoryGroups.map((categoryGroup) => categoryGroup.toValues()),
			accounts: args.accounts.map((account) => account.toValues()),
			createdAt: args.budget.createdAt,
			updatedAt: args.budget.updatedAt
		});
	}

	public toValues(): BudgetValues {
		return {
			id: this.id,
			name: this.name,
			userId: this.userId,
			categoryGroups: this.categoryGroups.map((categoryGroup) => categoryGroup.toValues()),
			accounts: this.accounts.map((account) => account.toValues()),
			createdAt: this.createdAt.toDate(),
			updatedAt: this.updatedAt.toDate()
		};
	}

	public getMonthAssignedAmount(month: appDayjs.Dayjs): number {
		return this.categoryGroups.reduce(
			(acc, categoryGroup) => acc + categoryGroup.getMonthAssignmentAmount(month),
			0
		);
	}

	public getMonthUsedAmount(month: appDayjs.Dayjs): number {
		return this.categoryGroups.reduce(
			(acc, categoryGroup) => acc + categoryGroup.getMonthUsedAmount(month),
			0
		);
	}

	public getMonthAssignableAmount(month: appDayjs.Dayjs): number {
		return this.currentBalance - this.getMonthAssignedAmount(month);
	}

	public get currentBalance(): number {
		return this.accounts.reduce((sum, account) => {
			if (account.type !== 'CREDIT_CARD') {
				return sum + account.balance;
			}

			return sum;
		}, 0);
	}
}
