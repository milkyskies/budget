import { AccountType } from '@prisma/client';
import { z } from 'zod';

export const updateAccountDtoSchema = z.object({
	name: z.string().optional(),
	type: z.nativeEnum(AccountType).optional(),
	initialBalance: z.number().optional()
});

export type UpdateAccountDto = z.infer<typeof updateAccountDtoSchema>;
