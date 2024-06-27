import { error, json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import type { RequestHandler } from './$types';
import { upsertEntryDtoSchema, type UpsertEntryDto } from './_dto/upsert-entry.dto';
import { EntryService } from 'src/lib/domain/service/entry.service';

export const PUT: RequestHandler = async ({ request, locals }) => {
	const prismaClient = getPrismaClient();

	const userId = locals.user?.id;

	if (!userId) {
		error(401, 'Unauthorized');
	}

	// TODO: Put all in budget

	const payload: UpsertEntryDto = await request
		.json()
		.then((data) => upsertEntryDtoSchema.parse(data));

	const entry = await EntryService.new({ prismaClient }).upsert({ entry: payload });
	const entryValues = entry.toValues();

	return json(entryValues);
};
