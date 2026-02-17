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
  orderGroup: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  isActiv: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional()
}).strict();
export const GroupMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupMinOrderByAggregateInput>;
export const GroupMinOrderByAggregateInputObjectZodSchema = makeSchema();
