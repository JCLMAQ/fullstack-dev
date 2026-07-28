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
  scope: SortOrderSchema.optional()
}).strict();
export const ScopeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ScopeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeMaxOrderByAggregateInput>;
export const ScopeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
