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
  key: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const ApiKeyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyMaxOrderByAggregateInput>;
export const ApiKeyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
