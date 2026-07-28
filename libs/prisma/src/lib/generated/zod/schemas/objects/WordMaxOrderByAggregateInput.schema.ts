import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const WordMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WordMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WordMaxOrderByAggregateInput>;
export const WordMaxOrderByAggregateInputObjectZodSchema = makeSchema();
