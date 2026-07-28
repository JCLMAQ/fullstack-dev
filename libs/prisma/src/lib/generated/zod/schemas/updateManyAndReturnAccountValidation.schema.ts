import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationUpdateManyMutationInputObjectSchema as AccountValidationUpdateManyMutationInputObjectSchema } from './objects/AccountValidationUpdateManyMutationInput.schema';
import { AccountValidationWhereInputObjectSchema as AccountValidationWhereInputObjectSchema } from './objects/AccountValidationWhereInput.schema';

export const AccountValidationUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountValidationUpdateManyAndReturnArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(), data: AccountValidationUpdateManyMutationInputObjectSchema, where: AccountValidationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountValidationUpdateManyAndReturnArgs>;

export const AccountValidationUpdateManyAndReturnZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(), data: AccountValidationUpdateManyMutationInputObjectSchema, where: AccountValidationWhereInputObjectSchema.optional() }).strict();