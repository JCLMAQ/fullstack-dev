import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneCreateManyInputObjectSchema as PhoneCreateManyInputObjectSchema } from './objects/PhoneCreateManyInput.schema';

export const PhoneCreateManyAndReturnSchema: z.ZodType<Prisma.PhoneCreateManyAndReturnArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), data: z.union([ PhoneCreateManyInputObjectSchema, z.array(PhoneCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PhoneCreateManyAndReturnArgs>;

export const PhoneCreateManyAndReturnZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), data: z.union([ PhoneCreateManyInputObjectSchema, z.array(PhoneCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();