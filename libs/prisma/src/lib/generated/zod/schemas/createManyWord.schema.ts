import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordCreateManyInputObjectSchema as WordCreateManyInputObjectSchema } from './objects/WordCreateManyInput.schema';

export const WordCreateManySchema: z.ZodType<Prisma.WordCreateManyArgs> = z.object({ data: z.union([ WordCreateManyInputObjectSchema, z.array(WordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WordCreateManyArgs>;

export const WordCreateManyZodSchema = z.object({ data: z.union([ WordCreateManyInputObjectSchema, z.array(WordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();