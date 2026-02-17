import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  orderPost: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const PostMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostMinOrderByAggregateInput>;
export const PostMinOrderByAggregateInputObjectZodSchema = makeSchema();
