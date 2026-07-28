import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const TagCategoriesAvgAggregateInputObjectSchema: z.ZodType<Prisma.TagCategoriesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesAvgAggregateInputType>;
export const TagCategoriesAvgAggregateInputObjectZodSchema = makeSchema();
