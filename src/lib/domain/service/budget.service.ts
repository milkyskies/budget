import { PrismaClient } from '@prisma/client';
import { AccountEntity } from '../entity/account.entity';
import { BudgetEntity } from '../entity/budget.entity';
import { CategoryGroupEntity } from '../entity/category-group.entity';
import { CategoryEntity } from '../entity/category.entity';

export class BudgetService {
	private constructor(private readonly prismaClient: PrismaClient) {}

	public static create(prismaClient: PrismaClient): BudgetService {
		return new BudgetService(prismaClient);
	}

	public async getFirstBudget(args: { userId: string }): Promise<BudgetEntity | undefined> {
		const budget = await this.prismaClient.budget.findFirst({
			where: {
				userId: args.userId
			},
			take: 1,
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				categoryGroups: {
					include: {
						categories: {
							include: {
								entries: true
							}
						}
					}
				},
				accounts: true
			}
		});

		if (!budget) return;

		const categoryGroups = budget.categoryGroups.map((categoryGroup) => {
			const categories = categoryGroup.categories.map((category) =>
				CategoryEntity.fromPrisma({ category })
			);

			return CategoryGroupEntity.fromPrisma({
				categoryGroup,
				categories: categories.map((category) => category.toValues())
			});
		});

		const accounts = budget.accounts.map((account) => AccountEntity.fromPrisma(account));

		return BudgetEntity.fromPrisma({
			budget,
			categoryGroups: categoryGroups.map((categoryGroup) => categoryGroup.toValues()),
			accounts: accounts.map((account) => account.toValues())
		});
	}

	public async createDefaultBudget(args: { name: string; userId: string }): Promise<BudgetEntity> {
		const budget = await this.prismaClient.budget.create({
			data: {
				userId: args.userId,
				name: args.name,
				categoryGroups: {
					create: [
						{
							name: 'Essential Expenses',
							categories: {
								create: [{ name: 'Housing' }, { name: 'Utilities' }, { name: 'Groceries' }]
							}
						},
						{
							name: 'Discretionary Spending',
							categories: {
								create: [{ name: 'Entertainment' }, { name: 'Dining Out' }, { name: 'Shopping' }]
							}
						}
					]
				},
				accounts: {
					create: [
						{ name: 'Checking Account', balance: 0 },
						{ name: 'Savings Account', balance: 0 }
					]
				}
			},
			include: {
				categoryGroups: {
					include: {
						categories: {
							include: {
								entries: true
							}
						}
					}
				},
				accounts: true
			}
		});

		const categoryGroups = budget.categoryGroups.map((categoryGroup) => {
			const categories = categoryGroup.categories.map((category) =>
				CategoryEntity.fromPrisma({ category })
			);

			return CategoryGroupEntity.fromPrisma({
				categoryGroup,
				categories: categories.map((category) => category.toValues())
			});
		});

		const accounts = budget.accounts.map((account) => AccountEntity.fromPrisma(account));

		return BudgetEntity.fromPrisma({
			budget,
			categoryGroups: categoryGroups.map((categoryGroup) => categoryGroup.toValues()),
			accounts: accounts.map((account) => account.toValues())
		});
	}

	// TODO: support multiple budgets
	public async getBudgets(): Promise<BudgetEntity[]> {
		const budgets = await this.prismaClient.budget.findMany({
			include: {
				categoryGroups: {
					include: {
						categories: true
					}
				},
				accounts: true
			}
		});

		const budgetsEntities = budgets.map((budget) => {
			const categoryGroups = budget.categoryGroups.map((categoryGroup) => {
				const categories = categoryGroup.categories.map((category) =>
					CategoryEntity.fromPrisma({ category })
				);

				return CategoryGroupEntity.fromPrisma({
					categoryGroup,
					categories: categories.map((category) => category.toValues())
				});
			});

			const accounts = budget.accounts.map((account) => AccountEntity.fromPrisma(account));

			return BudgetEntity.fromPrisma({
				budget,
				categoryGroups: categoryGroups.map((categoryGroup) => categoryGroup.toValues()),
				accounts: accounts.map((account) => account.toValues())
			});
		});

		return budgetsEntities;
	}
}
