import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const WordSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WordSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WordSumOrderByAggregateInput>;
export const WordSumOrderByAggregateInputObjectZodSchema = makeSchema();
