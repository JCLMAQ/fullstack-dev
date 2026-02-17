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
  doneAt: SortOrderSchema.optional(),
  modifiedById: SortOrderSchema.optional(),
  modelName: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional()
}).strict();
export const ChangesTrackingMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChangesTrackingMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingMaxOrderByAggregateInput>;
export const ChangesTrackingMaxOrderByAggregateInputObjectZodSchema = makeSchema();
