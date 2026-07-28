import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  orderComment: SortOrderSchema.optional()
}).strict();
export const CommentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CommentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentSumOrderByAggregateInput>;
export const CommentSumOrderByAggregateInputObjectZodSchema = makeSchema();
