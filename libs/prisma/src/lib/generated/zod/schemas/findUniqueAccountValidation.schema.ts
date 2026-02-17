import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './objects/AccountValidationSelect.schema';
import { AccountValidationWhereUniqueInputObjectSchema as AccountValidationWhereUniqueInputObjectSchema } from './objects/AccountValidationWhereUniqueInput.schema';

export const AccountValidationFindUniqueSchema: z.ZodType<Prisma.AccountValidationFindUniqueArgs> = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountValidationFindUniqueArgs>;

export const AccountValidationFindUniqueZodSchema = z.object({ select: AccountValidationSelectObjectSchema.optional(),  where: AccountValidationWhereUniqueInputObjectSchema }).strict();