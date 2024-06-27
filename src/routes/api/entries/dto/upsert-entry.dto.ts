import { EntryType } from '@prisma/client';
import { z } from 'zod';

export const upsertEntryDtoSchema = z.object({
	id: z.string().optional(),
	amount: z.number(),
	type: z.nativeEnum(EntryType),
	memo: z.string(),
	date: z.coerce.date(),
	accountId: z.string(),
	destinationAccountId: z.string().optional(),
	externalPartyId: z.string().optional(),
	categoryId: z.string().optional()
});

export type UpsertEntryDto = z.infer<typeof upsertEntryDtoSchema>;
