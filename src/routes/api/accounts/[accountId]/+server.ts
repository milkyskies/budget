import { error, json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import { AccountService } from 'src/lib/domain/service/account.service';
import type { RequestHandler } from './$types';
import { updateAccountDtoSchema, type UpdateAccountDto } from '../_dto/update-delete.dto';

export const PATCH: RequestHandler = async ({ request, locals, params }) => {
	const prismaClient = getPrismaClient();
	const userId = locals.user?.id;

	if (!userId) throw error(401, 'Unauthorized');

	const accountId = params.accountId;

	if (!accountId) throw error(400, 'Account ID is required');

	const payload: UpdateAccountDto = await request
		.json()
		.then((data) => updateAccountDtoSchema.parse(data));

	const account = await AccountService.new({ prismaClient }).update({
		accountId: accountId,
		data: payload
	});

	const accountValues = account.toValues();

	return json(accountValues);
};

export const DELETE: RequestHandler = async ({ locals, params }) => {
	const prismaClient = getPrismaClient();
	const userId = locals.user?.id;

	if (!userId) throw error(401, 'Unauthorized');

	const accountId = params.accountId;

	if (!accountId) throw error(400, 'Account ID is required');

	await AccountService.new({ prismaClient }).delete({ accountId: accountId });

	return json({ success: true });
};
