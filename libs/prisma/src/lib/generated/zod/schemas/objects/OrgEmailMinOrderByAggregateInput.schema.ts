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
  email: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional()
}).strict();
export const OrgEmailMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailMinOrderByAggregateInput>;
export const OrgEmailMinOrderByAggregateInputObjectZodSchema = makeSchema();
