import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const TagCategoriesSumAggregateInputObjectSchema: z.ZodType<Prisma.TagCategoriesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesSumAggregateInputType>;
export const TagCategoriesSumAggregateInputObjectZodSchema = makeSchema();
