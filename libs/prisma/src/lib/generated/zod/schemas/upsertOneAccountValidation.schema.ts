import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationWhereUniqueInputObjectSchema as AccountValidationWhereUniqueInputObjectSchema } from './objects/AccountValidationWhereUniqueInput.schema';
import { AccountValidationCreateInputObjectSchema as AccountValidationCreateInputObjectSchema } from './objects/AccountValidationCreateInput.schema';
import { AccountValidationUncheckedCreateInputObjectSchema as AccountValidationUncheckedCreateInputObjectSchema } from './objects/AccountValidationUncheckedCreateInput.schema';
import { AccountValidationUpdateInputObjectSchema as AccountValidationUpdateInputObjectSchema } from './objects/AccountValidationUpdateInput.schema';
import { AccountValidationUncheckedUpdateInputObjectSchema as AccountValidationUncheckedUpdateInputObjectSchema } from './objects/AccountValidationUncheckedUpdateInput.schema';

export const AccountValidationUpsertOneSchema: z.ZodType<Prisma.AccountValidationUpsertArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema, create: z.union([ AccountValidationCreateInputObjectSchema, AccountValidationUncheckedCreateInputObjectSchema ]), update: z.union([ AccountValidationUpdateInputObjectSchema, AccountValidationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountValidationUpsertArgs>;

export const AccountValidationUpsertOneZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema, create: z.union([ AccountValidationCreateInputObjectSchema, AccountValidationUncheckedCreateInputObjectSchema ]), update: z.union([ AccountValidationUpdateInputObjectSchema, AccountValidationUncheckedUpdateInputObjectSchema ]) }).strict();