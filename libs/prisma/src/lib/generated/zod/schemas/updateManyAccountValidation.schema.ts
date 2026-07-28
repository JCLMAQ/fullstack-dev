import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AccountValidationUpdateManyMutationInputObjectSchema as AccountValidationUpdateManyMutationInputObjectSchema } from './objects/AccountValidationUpdateManyMutationInput.schema';
import { AccountValidationWhereInputObjectSchema as AccountValidationWhereInputObjectSchema } from './objects/AccountValidationWhereInput.schema';

export const AccountValidationUpdateManySchema: z.ZodType<Prisma.AccountValidationUpdateManyArgs> = z.object({ data: AccountValidationUpdateManyMutationInputObjectSchema, where: AccountValidationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountValidationUpdateManyArgs>;

export const AccountValidationUpdateManyZodSchema = z.object({ data: AccountValidationUpdateManyMutationInputObjectSchema, where: AccountValidationWhereInputObjectSchema.optional() }).strict();