import { appDayjs } from '$lib/app/time/dayjs';
import { BudgetService } from 'src/lib/domain/service/budget.service';
import type { LayoutServerLoad } from './$types';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';

export const load: LayoutServerLoad = async ({ locals }) => {
	const prismaClient = getPrismaClient();
	const budgetService = BudgetService.new({ prismaClient });

	if (!locals.user) throw new Error('Not logged in');

	let budget = await budgetService.getBudgetFromMonth({ userId: locals.user.id, month: appDayjs() });

	if (!budget) {
		budget = await budgetService.createDefaultBudget({ name: '予算', userId: locals.user.id });
	}

	return {
		budget: budget.toValues()
	};
};
