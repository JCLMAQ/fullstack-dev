import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationCreateManyInputObjectSchema as AccountValidationCreateManyInputObjectSchema } from './objects/AccountValidationCreateManyInput.schema';

export const AccountValidationCreateManySchema: z.ZodType<Prisma.AccountValidationCreateManyArgs> = z.object({ data: z.union([ AccountValidationCreateManyInputObjectSchema, z.array(AccountValidationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountValidationCreateManyArgs>;

export const AccountValidationCreateManyZodSchema = z.object({ data: z.union([ AccountValidationCreateManyInputObjectSchema, z.array(AccountValidationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();