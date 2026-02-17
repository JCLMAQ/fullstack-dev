import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  modelName: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional()
}).strict();
export const TagCategoriesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagCategoriesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesCountOrderByAggregateInput>;
export const TagCategoriesCountOrderByAggregateInputObjectZodSchema = makeSchema();
