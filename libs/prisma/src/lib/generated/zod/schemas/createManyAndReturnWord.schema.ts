import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './objects/WordSelect.schema';
import { WordCreateManyInputObjectSchema as WordCreateManyInputObjectSchema } from './objects/WordCreateManyInput.schema';

export const WordCreateManyAndReturnSchema: z.ZodType<Prisma.WordCreateManyAndReturnArgs> = z.object({ select: WordSelectObjectSchema.optional(), data: z.union([ WordCreateManyInputObjectSchema, z.array(WordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WordCreateManyAndReturnArgs>;

export const WordCreateManyAndReturnZodSchema = z.object({ select: WordSelectObjectSchema.optional(), data: z.union([ WordCreateManyInputObjectSchema, z.array(WordCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();