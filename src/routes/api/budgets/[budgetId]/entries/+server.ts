import { json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import type { RequestHandler } from './$types';
import { EntryService } from 'src/lib/domain/service/entry.service';
import { upsertEntryDtoSchema, type UpsertEntryDto } from 'src/lib/domain/dto/entry.dto';

export const PUT: RequestHandler = async ({ request }) => {
	const prismaClient = getPrismaClient();

	const payload: UpsertEntryDto = await request
		.json()
		.then((data) => upsertEntryDtoSchema.parse(data));

	const entry = await EntryService.new({ prismaClient }).upsert({ entry: payload });
	const entryValues = entry.toValues();

	return json(entryValues);
};
