import { z } from 'zod';

export const createExternalPartyDtoSchema = z.object({
	name: z.string(),
	budgetId: z.string()
});

export type CreateExternalPartyDto = z.infer<typeof createExternalPartyDtoSchema>;

export const updateExternalPartyDtoSchema = z.object({
	id: z.string(),
	name: z.string()
});
