import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const ConfigParamAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigParamAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamAvgOrderByAggregateInput>;
export const ConfigParamAvgOrderByAggregateInputObjectZodSchema = makeSchema();
