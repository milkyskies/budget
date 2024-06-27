import { EntryType } from '@prisma/client';
import { z } from 'zod';

const upsertEntryItemDtoSchema = z.object({
	id: z.string().optional(),
	amount: z.number(),
	categoryId: z.string().optional()
});

export const upsertEntryDtoSchema = z.object({
	id: z.string().optional(),
	type: z.nativeEnum(EntryType),
	memo: z.string(),
	date: z.coerce.date(),
	accountId: z.string(),
	destinationAccountId: z.string().optional(),
	externalPartyId: z.string().optional(),
	entryItems: z.array(upsertEntryItemDtoSchema)
});

export type UpsertEntryDto = z.infer<typeof upsertEntryDtoSchema>;

export type UpsertEntryItemDto = z.infer<typeof upsertEntryItemDtoSchema>;
