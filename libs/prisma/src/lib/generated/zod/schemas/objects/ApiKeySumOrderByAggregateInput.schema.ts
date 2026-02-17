import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const ApiKeySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeySumOrderByAggregateInput>;
export const ApiKeySumOrderByAggregateInputObjectZodSchema = makeSchema();
