import dayjs from '$lib/app/time/dayjs';
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { BudgetService } from 'src/lib/domain/service/budget.service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const prisma = new PrismaClient();
	const budgetService = BudgetService.new(prisma);

	if (!locals.user) throw new Error('Not logged in');

	// TODO: use [[budgetId]]
	const budget = await budgetService.getBudgetFromMonth({ userId: locals.user.id, month: dayjs() });

	if (!budget) error(404, 'Budget not found');

	const entries = await budgetService.getEntries({ budgetId: budget.id });

	return {
		entries: entries.map((entry) => entry.toValues()),
		accounts: budget.accounts.map((account) => account.toValues())
	};
};
