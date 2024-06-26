import { error, json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import { AccountService } from 'src/lib/domain/service/account.service';
import type { RequestHandler } from './$types';
import { createAccountSchema, type CreateAccountDto } from './dto/create-account.dto';

export const POST: RequestHandler = async ({ request, locals }) => {
	const prisma = getPrismaClient();

	const userId = locals.user?.id;

	if (!userId) {
		error(401, 'Unauthorized');
	}

	// TODO: Check if user owns budget

	const payload: CreateAccountDto = await request
		.json()
		.then((data) => createAccountSchema.parse(data));

	const account = await AccountService.new(prisma).create(payload);

	return json(account.toValues());
};
