import dayjs from '$lib/app/time/dayjs';
import { error } from '@sveltejs/kit';
import { BudgetService } from 'src/lib/domain/service/budget.service';
import type { PageServerLoad } from './$types';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';

export const load: PageServerLoad = async ({ locals }) => {
	const prismaClient = getPrismaClient();
	const budgetService = BudgetService.new({ prismaClient });

	if (!locals.user) throw new Error('Not logged in');

	// TODO: use [[budgetId]]
	const budget = await budgetService.getBudgetFromMonth({ userId: locals.user.id, month: dayjs() });

	if (!budget) error(404, 'Budget not found');

	const entries = await budgetService.getEntries({ budgetId: budget.id });

	const categoryGroups = budget.categoryGroups;

	return {
		entries: entries.map((entry) => entry.toValues()),
		accounts: budget.accounts.map((account) => account.toValues()),
		categoryGroups: categoryGroups.map((categoryGroup) => categoryGroup.toValues())
	};
};
