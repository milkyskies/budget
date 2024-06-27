import { AccountType } from '@prisma/client';
import { z } from 'zod';

export const createAccountDtoSchema = z.object({
	name: z.string(),
	type: z.nativeEnum(AccountType),
	budgetId: z.string(),
	initialBalance: z.number()
});

export type CreateAccountDto = z.infer<typeof createAccountDtoSchema>;
