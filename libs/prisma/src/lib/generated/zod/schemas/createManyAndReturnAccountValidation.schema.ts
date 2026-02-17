import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationCreateManyInputObjectSchema as AccountValidationCreateManyInputObjectSchema } from './objects/AccountValidationCreateManyInput.schema';

export const AccountValidationCreateManyAndReturnSchema: z.ZodType<Prisma.AccountValidationCreateManyAndReturnArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(), data: z.union([ AccountValidationCreateManyInputObjectSchema, z.array(AccountValidationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountValidationCreateManyAndReturnArgs>;

export const AccountValidationCreateManyAndReturnZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(), data: z.union([ AccountValidationCreateManyInputObjectSchema, z.array(AccountValidationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();