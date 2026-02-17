import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationUpdateInputObjectSchema as AccountValidationUpdateInputObjectSchema } from './objects/AccountValidationUpdateInput.schema';
import { AccountValidationUncheckedUpdateInputObjectSchema as AccountValidationUncheckedUpdateInputObjectSchema } from './objects/AccountValidationUncheckedUpdateInput.schema';
import { AccountValidationWhereUniqueInputObjectSchema as AccountValidationWhereUniqueInputObjectSchema } from './objects/AccountValidationWhereUniqueInput.schema';

export const AccountValidationUpdateOneSchema: z.ZodType<Prisma.AccountValidationUpdateArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(),  data: z.union([AccountValidationUpdateInputObjectSchema, AccountValidationUncheckedUpdateInputObjectSchema]), where: AccountValidationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountValidationUpdateArgs>;

export const AccountValidationUpdateOneZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(),  data: z.union([AccountValidationUpdateInputObjectSchema, AccountValidationUncheckedUpdateInputObjectSchema]), where: AccountValidationWhereUniqueInputObjectSchema }).strict();