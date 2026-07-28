import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './objects/PhoneInclude.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';

export const PhoneDeleteOneSchema: z.ZodType<Prisma.PhoneDeleteArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PhoneDeleteArgs>;

export const PhoneDeleteOneZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema }).strict();