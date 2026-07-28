import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './objects/PhoneInclude.schema';
import { PhoneUpdateInputObjectSchema as PhoneUpdateInputObjectSchema } from './objects/PhoneUpdateInput.schema';
import { PhoneUncheckedUpdateInputObjectSchema as PhoneUncheckedUpdateInputObjectSchema } from './objects/PhoneUncheckedUpdateInput.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';

export const PhoneUpdateOneSchema: z.ZodType<Prisma.PhoneUpdateArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), data: z.union([PhoneUpdateInputObjectSchema, PhoneUncheckedUpdateInputObjectSchema]), where: PhoneWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PhoneUpdateArgs>;

export const PhoneUpdateOneZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), data: z.union([PhoneUpdateInputObjectSchema, PhoneUncheckedUpdateInputObjectSchema]), where: PhoneWhereUniqueInputObjectSchema }).strict();