import { error } from '@sveltejs/kit';
import { BudgetService } from 'src/lib/domain/service/budget.service';
import type { PageServerLoad } from './$types';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';

export const load: PageServerLoad = async ({ locals, parent }) => {
	const { budget } = await parent();

	const prismaClient = getPrismaClient();
	const budgetService = BudgetService.new({ prismaClient });

	if (!locals.user) throw new Error('Not logged in');

	if (!budget) error(404, 'Budget not found');

	const entries = await budgetService.getEntries({ budgetId: budget.id });

	const categoryGroups = budget.categoryGroups;

	return {
		entries: entries.map((entry) => entry.toValues()),
		accounts: budget.accounts,
		categoryGroups: categoryGroups,
		budgetId: budget.id
	};
};
