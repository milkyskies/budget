import { error, json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import { AccountService } from 'src/lib/domain/service/account.service';
import type { RequestHandler } from './$types';
import { createAccountDtoSchema, type CreateAccountDto } from './dto/create-account.dto';
import { updateAccountDtoSchema, type UpdateAccountDto } from './dto/update-delete.dto';

export const POST: RequestHandler = async ({ request, locals }) => {
	const prismaClient = getPrismaClient();

	const userId = locals.user?.id;

	if (!userId) {
		error(401, 'Unauthorized');
	}

	// TODO: Check if user owns budget

	const payload: CreateAccountDto = await request
		.json()
		.then((data) => createAccountDtoSchema.parse(data));

	const account = await AccountService.new({ prismaClient }).create({ account: payload });
	const accountValues = account.toValues();

	return json(accountValues);
};
