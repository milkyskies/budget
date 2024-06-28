import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import type { RequestHandler } from './$types';
import { EntryService } from 'src/lib/domain/service/entry.service';
import { json } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ params }) => {
	const prismaClient = getPrismaClient();

	await EntryService.new({ prismaClient }).delete({
		entryId: params.entryId
	});

	return json({ success: true });
};
