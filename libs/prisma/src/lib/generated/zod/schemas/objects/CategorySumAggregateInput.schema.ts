import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderCategory: z.literal(true).optional()
}).strict();
export const CategorySumAggregateInputObjectSchema: z.ZodType<Prisma.CategorySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategorySumAggregateInputType>;
export const CategorySumAggregateInputObjectZodSchema = makeSchema();
