import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  orderComment: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional()
}).strict();
export const CommentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CommentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentMinOrderByAggregateInput>;
export const CommentMinOrderByAggregateInputObjectZodSchema = makeSchema();
