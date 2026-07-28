import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  orderPost: SortOrderSchema.optional()
}).strict();
export const PostAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostAvgOrderByAggregateInput>;
export const PostAvgOrderByAggregateInputObjectZodSchema = makeSchema();
