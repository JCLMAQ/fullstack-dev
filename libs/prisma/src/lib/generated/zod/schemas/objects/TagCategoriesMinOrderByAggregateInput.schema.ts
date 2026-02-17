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
export const TagCategoriesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagCategoriesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesMinOrderByAggregateInput>;
export const TagCategoriesMinOrderByAggregateInputObjectZodSchema = makeSchema();
