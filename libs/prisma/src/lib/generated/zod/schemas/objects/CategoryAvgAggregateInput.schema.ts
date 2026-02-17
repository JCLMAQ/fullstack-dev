import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderCategory: z.literal(true).optional()
}).strict();
export const CategoryAvgAggregateInputObjectSchema: z.ZodType<Prisma.CategoryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoryAvgAggregateInputType>;
export const CategoryAvgAggregateInputObjectZodSchema = makeSchema();
