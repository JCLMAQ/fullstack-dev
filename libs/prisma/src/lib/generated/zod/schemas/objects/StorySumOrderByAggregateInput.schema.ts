import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const StorySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StorySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StorySumOrderByAggregateInput>;
export const StorySumOrderByAggregateInputObjectZodSchema = makeSchema();
