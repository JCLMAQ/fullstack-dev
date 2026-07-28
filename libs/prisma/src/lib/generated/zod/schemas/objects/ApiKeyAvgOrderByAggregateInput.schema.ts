import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const ApiKeyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyAvgOrderByAggregateInput>;
export const ApiKeyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
