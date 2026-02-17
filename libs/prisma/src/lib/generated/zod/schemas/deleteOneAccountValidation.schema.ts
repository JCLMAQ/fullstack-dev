import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationWhereUniqueInputObjectSchema as AccountValidationWhereUniqueInputObjectSchema } from './objects/AccountValidationWhereUniqueInput.schema';

export const AccountValidationDeleteOneSchema: z.ZodType<Prisma.AccountValidationDeleteArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountValidationDeleteArgs>;

export const AccountValidationDeleteOneZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema }).strict();