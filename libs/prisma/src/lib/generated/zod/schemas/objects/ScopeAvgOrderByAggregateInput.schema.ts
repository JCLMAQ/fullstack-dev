import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const ScopeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ScopeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeAvgOrderByAggregateInput>;
export const ScopeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
