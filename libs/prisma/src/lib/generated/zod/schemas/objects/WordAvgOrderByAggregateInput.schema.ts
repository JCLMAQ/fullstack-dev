import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const WordAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WordAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WordAvgOrderByAggregateInput>;
export const WordAvgOrderByAggregateInputObjectZodSchema = makeSchema();
