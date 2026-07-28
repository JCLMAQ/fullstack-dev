import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './WordWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WordWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WordWhereInputObjectSchema).optional()
}).strict();
export const WordScalarRelationFilterObjectSchema: z.ZodType<Prisma.WordScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WordScalarRelationFilter>;
export const WordScalarRelationFilterObjectZodSchema = makeSchema();
