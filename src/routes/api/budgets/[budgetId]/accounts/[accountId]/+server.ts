import { error, json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import { AccountService } from 'src/lib/domain/service/account.service';
import type { RequestHandler } from './$types';
import { updateAccountDtoSchema, type UpdateAccountDto } from 'src/lib/domain/dto/account.dto';

export const PATCH: RequestHandler = async ({ request, params }) => {
	const prismaClient = getPrismaClient();

	const accountId = params.accountId;

	if (!accountId) throw error(400, 'Account ID is required');

	const payload: UpdateAccountDto = await request
		.json()
		.then((data) => updateAccountDtoSchema.parse(data));

	const account = await AccountService.new({ prismaClient }).update({
		accountId,
		data: payload
	});

	const accountValues = account.toValues();

	return json(accountValues);
};

export const DELETE: RequestHandler = async ({ params }) => {
	const prismaClient = getPrismaClient();

	const accountId = params.accountId;

	if (!accountId) throw error(400, 'Account ID is required');

	await AccountService.new({ prismaClient }).delete({ accountId });

	return json({ success: true });
};
