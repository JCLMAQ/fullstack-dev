import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  position: z.literal(true).optional(),
  tagCategoriesId: z.literal(true).optional(),
  mainTagId: z.literal(true).optional()
}).strict();
export const TagValueAvgAggregateInputObjectSchema: z.ZodType<Prisma.TagValueAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagValueAvgAggregateInputType>;
export const TagValueAvgAggregateInputObjectZodSchema = makeSchema();
