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
  doneAt: SortOrderSchema.optional(),
  modifiedById: SortOrderSchema.optional(),
  modelName: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional()
}).strict();
export const ChangesTrackingMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChangesTrackingMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingMinOrderByAggregateInput>;
export const ChangesTrackingMinOrderByAggregateInputObjectZodSchema = makeSchema();
