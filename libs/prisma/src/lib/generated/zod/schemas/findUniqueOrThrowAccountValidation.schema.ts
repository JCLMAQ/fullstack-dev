import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationWhereUniqueInputObjectSchema as AccountValidationWhereUniqueInputObjectSchema } from './objects/AccountValidationWhereUniqueInput.schema';

export const AccountValidationFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountValidationFindUniqueOrThrowArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountValidationFindUniqueOrThrowArgs>;

export const AccountValidationFindUniqueOrThrowZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema }).strict();