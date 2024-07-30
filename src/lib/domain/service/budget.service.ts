import { PrismaClient } from '@prisma/client';
import { AccountEntity } from '../entity/account.entity';
import { BudgetEntity } from '../entity/budget.entity';
import { CategoryGroupEntity } from '../entity/category-group.entity';
import { CategoryEntity } from '../entity/category.entity';
import { EntryEntity } from '../entity/entry.entity';
import { EntryItemEntity } from '../entity/entry-item.entity';
import { createId } from '@paralleldrive/cuid2';
import { ExternalPartyEntity } from '../entity/external-party.entity';

export class BudgetService {
	private constructor(private readonly prismaClient: PrismaClient) {}

	public static new(args: { prismaClient: PrismaClient }): BudgetService {
		return new BudgetService(args.prismaClient);
	}

	public async getFirstBudget(args: { userId: string }): Promise<BudgetEntity | undefined> {
		const prismaBudget = await this.prismaClient.budget.findFirst({
			where: {
				userId: args.userId
			},
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				categoryGroups: {
					include: {
						categories: {
							include: {
								entryItems: true
							}
						}
					}
				},
				accounts: {
					include: {
						entries: {
							include: {
								entryItems: true
							}
						},
						receivingEntries: {
							include: {
								entryItems: true
							}
						}
					}
				}
			}
		});

		if (!prismaBudget) return;

		const categoryGroups = prismaBudget.categoryGroups.map((categoryGroup) => {
			const categories = categoryGroup.categories.map((category) => {
				const entryItems = category.entryItems.map((entry) =>
					EntryItemEntity.fromPrisma({ prismaEntryItem: entry })
				);

				return CategoryEntity.fromPrisma({ category, entryItems });
			});

			return CategoryGroupEntity.fromPrisma({
				categoryGroup,
				categories: categories.map((category) => category)
			});
		});

		const accounts = prismaBudget.accounts.map((prismaAccount) => {
			return AccountEntity.fromPrisma({
				prismaAccount: prismaAccount,
				entries: prismaAccount.entries.map((prismaEntry) =>
					EntryEntity.fromPrisma({
						prismaEntry,
						entryItems: prismaEntry.entryItems.map((entryItem) =>
							EntryItemEntity.fromPrisma({ prismaEntryItem: entryItem })
						)
					})
				),
				receivingEntries: prismaAccount.receivingEntries.map((prismaEntry) =>
					EntryEntity.fromPrisma({
						prismaEntry,
						entryItems: prismaEntry.entryItems.map((entryItem) =>
							EntryItemEntity.fromPrisma({ prismaEntryItem: entryItem })
						)
					})
				)
			});
		});

		return BudgetEntity.fromPrisma({
			budget: prismaBudget,
			categoryGroups: categoryGroups.map((categoryGroup) => categoryGroup),
			accounts: accounts.map((account) => account)
		});
	}

	public async createDefaultBudget(args: { name: string; userId: string }): Promise<BudgetEntity> {
		const FIXED_EXPENSES = ['住居費', '保険料', '水道光熱費', '通信費', '自動車費', '教育費'];
		const VARIABLE_EXPENSES = ['食費', '日用品費', '交通費', '交際費', '美容費', '医療費'];
		const OTHER_EXPENSES = ['特別日', 'その他'];

		const prismaBudget = await this.prismaClient.budget.create({
			data: {
				id: createId(),
				userId: args.userId,
				name: args.name,
				categoryGroups: {
					create: [
						{
							id: createId(),
							name: '固定費',
							categories: {
								create: FIXED_EXPENSES.map((name) => ({ id: createId(), name }))
							}
						},
						{
							id: createId(),
							name: '変動費',
							categories: {
								create: VARIABLE_EXPENSES.map((name) => ({ id: createId(), name }))
							}
						},
						{
							id: createId(),
							name: 'その他',
							categories: {
								create: OTHER_EXPENSES.map((name) => ({ id: createId(), name }))
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
								entryItems: true
							}
						}
					}
				},
				accounts: {
					include: {
						entries: {
							include: {
								entryItems: true
							}
						},
						receivingEntries: {
							include: {
								entryItems: true
							}
						}
					}
				}
			}
		});

		const categoryGroups = prismaBudget.categoryGroups.map((categoryGroup) => {
			const categories = categoryGroup.categories.map((category) =>
				CategoryEntity.fromPrisma({ category })
			);

			return CategoryGroupEntity.fromPrisma({
				categoryGroup,
				categories: categories.map((category) => category)
			});
		});

		const accounts = prismaBudget.accounts.map((prismaAccount) =>
			AccountEntity.fromPrisma({
				prismaAccount: prismaAccount,
				entries: prismaAccount.entries.map((prismaEntry) =>
					EntryEntity.fromPrisma({
						prismaEntry,
						entryItems: prismaEntry.entryItems.map((entryItem) =>
							EntryItemEntity.fromPrisma({ prismaEntryItem: entryItem })
						)
					})
				),
				receivingEntries: prismaAccount.receivingEntries.map((prismaEntry) =>
					EntryEntity.fromPrisma({
						prismaEntry,
						entryItems: prismaEntry.entryItems.map((entryItem) =>
							EntryItemEntity.fromPrisma({ prismaEntryItem: entryItem })
						)
					})
				)
			})
		);

		return BudgetEntity.fromPrisma({
			budget: prismaBudget,
			categoryGroups: categoryGroups.map((categoryGroup) => categoryGroup),
			accounts: accounts.map((account) => account)
		});
	}

	public async getEntries(args: { budgetId: string }): Promise<EntryEntity[]> {
		const entries = await this.prismaClient.entry.findMany({
			where: {
				account: {
					budgetId: args.budgetId
				}
			},
			include: {
				entryItems: {
					include: {
						category: true
					}
				},
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
				prismaEntry: entry,
				entryItems: entry.entryItems.map((entryItem) =>
					EntryItemEntity.fromPrisma({
						prismaEntryItem: entryItem,
						category: entryItem.category
							? CategoryEntity.fromPrisma({ category: entryItem.category })
							: undefined
					})
				),
				account: AccountEntity.fromPrisma({ prismaAccount: entry.account }),
				destinationAccount: entry.destinationAccount
					? AccountEntity.fromPrisma({ prismaAccount: entry.destinationAccount })
					: undefined,
				externalParty: entry.externalParty
					? ExternalPartyEntity.fromPrisma({ externalParty: entry.externalParty })
					: undefined
			})
		);
	}
}
