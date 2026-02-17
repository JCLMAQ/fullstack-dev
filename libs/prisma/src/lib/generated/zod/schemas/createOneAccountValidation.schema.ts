import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationCreateInputObjectSchema as AccountValidationCreateInputObjectSchema } from './objects/AccountValidationCreateInput.schema';
import { AccountValidationUncheckedCreateInputObjectSchema as AccountValidationUncheckedCreateInputObjectSchema } from './objects/AccountValidationUncheckedCreateInput.schema';

export const AccountValidationCreateOneSchema: z.ZodType<Prisma.AccountValidationCreateArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(),  data: z.union([AccountValidationCreateInputObjectSchema, AccountValidationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountValidationCreateArgs>;

export const AccountValidationCreateOneZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(),  data: z.union([AccountValidationCreateInputObjectSchema, AccountValidationUncheckedCreateInputObjectSchema]) }).strict();