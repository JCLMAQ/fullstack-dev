import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './objects/PhoneInclude.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';

export const PhoneFindUniqueSchema: z.ZodType<Prisma.PhoneFindUniqueArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PhoneFindUniqueArgs>;

export const PhoneFindUniqueZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema }).strict();