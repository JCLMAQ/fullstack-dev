import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './objects/PhoneInclude.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';

export const PhoneFindUniqueOrThrowSchema: z.ZodType<Prisma.PhoneFindUniqueOrThrowArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PhoneFindUniqueOrThrowArgs>;

export const PhoneFindUniqueOrThrowZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema }).strict();