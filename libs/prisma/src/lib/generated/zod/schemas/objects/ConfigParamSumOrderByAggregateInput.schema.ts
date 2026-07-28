import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const ConfigParamSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigParamSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamSumOrderByAggregateInput>;
export const ConfigParamSumOrderByAggregateInputObjectZodSchema = makeSchema();
