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
export const WordMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WordMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WordMinOrderByAggregateInput>;
export const WordMinOrderByAggregateInputObjectZodSchema = makeSchema();
