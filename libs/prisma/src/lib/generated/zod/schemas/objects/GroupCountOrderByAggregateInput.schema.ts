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
export const GroupCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCountOrderByAggregateInput>;
export const GroupCountOrderByAggregateInputObjectZodSchema = makeSchema();
