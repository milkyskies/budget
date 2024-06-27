import dayjs from '$lib/app/time/dayjs';
import { PrismaClient } from '@prisma/client';
import { AccountEntity } from '../entity/account.entity';
import { BudgetEntity } from '../entity/budget.entity';
import { CategoryGroupEntity } from '../entity/category-group.entity';
import { CategoryEntity } from '../entity/category.entity';
import { EntryEntity } from '../entity/entry.entity';

export class BudgetService {
	private constructor(private readonly prismaClient: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): BudgetService {
		return new BudgetService(args.prismaClient);
	}

	public async getBudgetFromMonth(args: {
		userId: string;
		month: dayjs.Dayjs;
	}): Promise<BudgetEntity | undefined> {
		const budget = await this.prismaClient.budget.findFirst({
			where: {
				userId: args.userId,
				createdAt: {
					gte: args.month.startOf('month').toDate(),
					lt: args.month.endOf('month').toDate()
				}
			},
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
				accounts: {
					include: {
						entries: true
					}
				}
			}
		});

		if (!budget) return;

		const categoryGroups = budget.categoryGroups.map((categoryGroup) => {
			const categories = categoryGroup.categories.map((category) => {
				const entries = category.entries.map((entry) =>
					EntryEntity.fromPrisma({ entry }).toValues()
				);

				return CategoryEntity.fromPrisma({ category, entries });
			});

			return CategoryGroupEntity.fromPrisma({
				categoryGroup,
				categories: categories.map((category) => category.toValues())
			});
		});

		const accounts = budget.accounts.map((account) =>
			AccountEntity.fromPrisma({
				account,
				entries: account.entries.map((entry) => EntryEntity.fromPrisma({ entry }).toValues())
			})
		);

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
							name: '固定費',
							categories: {
								create: [{ name: '住宅' }, { name: '電気料金' }, { name: '水道料金' }]
							}
						},
						{
							name: '変動費',
							categories: {
								create: [{ name: '食費' }, { name: '趣味' }, { name: 'その他' }]
							}
						}
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
				accounts: {
					include: {
						entries: true
					}
				}
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

		const accounts = budget.accounts.map((account) =>
			AccountEntity.fromPrisma({
				account,
				entries: account.entries.map((entry) => EntryEntity.fromPrisma({ entry }).toValues())
			})
		);

		return BudgetEntity.fromPrisma({
			budget,
			categoryGroups: categoryGroups.map((categoryGroup) => categoryGroup.toValues()),
			accounts: accounts.map((account) => account.toValues())
		});
	}

	public async getEntries(args: { budgetId: string }): Promise<EntryEntity[]> {
		const entries = await this.prismaClient.entry.findMany({
			where: {
				category: {
					categoryGroup: {
						budgetId: args.budgetId
					}
				}
			},
			include: {
				category: true,
				destinationAccount: true,
				externalParty: true,
				account: true
			},
			orderBy: {
				date: 'desc'
			}
		});

		return entries.map((entry) =>
			EntryEntity.fromPrisma({
				entry,
				category: entry.category ?? undefined,
				account: entry.account ?? undefined,
				destinationAccount: entry.destinationAccount ?? undefined,
				externalParty: entry.externalParty ?? undefined
			})
		);
	}
}
