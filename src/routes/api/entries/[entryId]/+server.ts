import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import type { RequestHandler } from './$types';
import { EntryService } from 'src/lib/domain/service/entry.service';
import { error, json } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ locals, params }) => {
	const prismaClient = getPrismaClient();
	const userId = locals.user?.id;

	if (!userId) {
		error(401, 'Unauthorized');
	}

	await EntryService.new({ prismaClient }).delete({
		entryId: params.entryId
	});

	return json({ success: true });
};
