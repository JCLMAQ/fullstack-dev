import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  orderPost: SortOrderSchema.optional()
}).strict();
export const PostSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostSumOrderByAggregateInput>;
export const PostSumOrderByAggregateInputObjectZodSchema = makeSchema();
