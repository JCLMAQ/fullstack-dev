import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationWhereInputObjectSchema as AccountValidationWhereInputObjectSchema } from './objects/AccountValidationWhereInput.schema';

export const AccountValidationDeleteManySchema: z.ZodType<Prisma.AccountValidationDeleteManyArgs> = z.object({ where: AccountValidationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountValidationDeleteManyArgs>;

export const AccountValidationDeleteManyZodSchema = z.object({ where: AccountValidationWhereInputObjectSchema.optional() }).strict();