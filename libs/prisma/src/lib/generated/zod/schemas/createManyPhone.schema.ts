import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PhoneCreateManyInputObjectSchema as PhoneCreateManyInputObjectSchema } from './objects/PhoneCreateManyInput.schema';

export const PhoneCreateManySchema: z.ZodType<Prisma.PhoneCreateManyArgs> = z.object({ data: z.union([ PhoneCreateManyInputObjectSchema, z.array(PhoneCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PhoneCreateManyArgs>;

export const PhoneCreateManyZodSchema = z.object({ data: z.union([ PhoneCreateManyInputObjectSchema, z.array(PhoneCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();