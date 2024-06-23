import { BudgetService } from '$lib/domain/service/budget.service';
import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const prisma = new PrismaClient();
	const budgetService = BudgetService.create(prisma);

	if (!locals.user) throw new Error('Not logged in');

	let budget = await budgetService.getFirstBudget({ userId: locals.user.id });

	if (!budget) {
		budget = await budgetService.createDefaultBudget({ name: 'Budget', userId: locals.user.id });
	}

	return {
		budget: budget.toValues()
	};
};
