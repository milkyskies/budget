import { json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import { AccountService } from 'src/lib/domain/service/account.service';
import type { RequestHandler } from './$types';
import { createAccountDtoSchema, type CreateAccountDto } from 'src/lib/domain/dto/account.dto';

export const POST: RequestHandler = async ({ request, params }) => {
	const prismaClient = getPrismaClient();

	const budgetId = params.budgetId;

	const payload: CreateAccountDto = await request
		.json()
		.then((data) => createAccountDtoSchema.parse(data));

	const account = await AccountService.new({ prismaClient }).create({ budgetId, account: payload });
	const accountValues = account.toValues();

	return json(accountValues);
};
