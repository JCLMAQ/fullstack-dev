import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const TokenSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TokenSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TokenSumOrderByAggregateInput>;
export const TokenSumOrderByAggregateInputObjectZodSchema = makeSchema();
