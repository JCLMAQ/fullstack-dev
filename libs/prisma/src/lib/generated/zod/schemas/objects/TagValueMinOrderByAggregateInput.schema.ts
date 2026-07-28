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
  name: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  tagCategoriesId: SortOrderSchema.optional(),
  mainTagId: SortOrderSchema.optional()
}).strict();
export const TagValueMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagValueMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueMinOrderByAggregateInput>;
export const TagValueMinOrderByAggregateInputObjectZodSchema = makeSchema();
