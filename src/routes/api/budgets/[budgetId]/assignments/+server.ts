import { json } from '@sveltejs/kit';
import { getPrismaClient } from 'src/lib/app/database/prisma.client';
import {
	upsertAssignmentDtoSchema,
	type UpsertAssignmentDto
} from 'src/lib/domain/dto/assignment.dto';
import { AssignmentService } from 'src/lib/domain/service/assignment.service';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const prismaClient = getPrismaClient();

	const payload: UpsertAssignmentDto = await request
		.json()
		.then((data) => upsertAssignmentDtoSchema.parse(data));

	const assignment = await AssignmentService.new({ prismaClient }).upsert({
		data: payload
	});

	const assignmentValues = assignment.toValues();

	return json(assignmentValues);
};
