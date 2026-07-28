import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './objects/PhoneInclude.schema';
import { PhoneCreateInputObjectSchema as PhoneCreateInputObjectSchema } from './objects/PhoneCreateInput.schema';
import { PhoneUncheckedCreateInputObjectSchema as PhoneUncheckedCreateInputObjectSchema } from './objects/PhoneUncheckedCreateInput.schema';

export const PhoneCreateOneSchema: z.ZodType<Prisma.PhoneCreateArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), data: z.union([PhoneCreateInputObjectSchema, PhoneUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PhoneCreateArgs>;

export const PhoneCreateOneZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), data: z.union([PhoneCreateInputObjectSchema, PhoneUncheckedCreateInputObjectSchema]) }).strict();