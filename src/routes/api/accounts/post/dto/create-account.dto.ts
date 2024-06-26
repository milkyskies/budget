import { AccountType } from '@prisma/client';
import { z } from 'zod';

export const createAccountSchema = z.object({
	name: z.string(),
	type: z.nativeEnum(AccountType),
	balance: z.number(),
	budgetId: z.string()
});

export type CreateAccountDto = z.infer<typeof createAccountSchema>;
