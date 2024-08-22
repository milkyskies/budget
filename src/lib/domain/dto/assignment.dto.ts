import { z } from 'zod';

export const upsertAssignmentDtoSchema = z.object({
	amount: z.number(),
	categoryId: z.string(),
	date: z.coerce.date()
});

export type UpsertAssignmentDto = z.infer<typeof upsertAssignmentDtoSchema>;
