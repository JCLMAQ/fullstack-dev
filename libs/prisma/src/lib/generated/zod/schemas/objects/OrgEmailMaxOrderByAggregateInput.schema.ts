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
  email: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional()
}).strict();
export const OrgEmailMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailMaxOrderByAggregateInput>;
export const OrgEmailMaxOrderByAggregateInputObjectZodSchema = makeSchema();
