import dayjs from '$lib/app/time/dayjs';
import { PrismaClient } from '@prisma/client';
import { BudgetService } from 'src/lib/domain/service/budget.service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const prisma = new PrismaClient();
	const budgetService = BudgetService.new(prisma);

	if (!locals.user) throw new Error('Not logged in');

	let budget = await budgetService.getBudgetFromMonth({ userId: locals.user.id, month: dayjs() });

	if (!budget) {
		budget = await budgetService.createDefaultBudget({ name: '予算', userId: locals.user.id });
	}

	return {
		budget: budget.toValues()
	};
};
