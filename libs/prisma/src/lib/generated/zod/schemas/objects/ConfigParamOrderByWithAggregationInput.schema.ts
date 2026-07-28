import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConfigParamCountOrderByAggregateInputObjectSchema as ConfigParamCountOrderByAggregateInputObjectSchema } from './ConfigParamCountOrderByAggregateInput.schema';
import { ConfigParamAvgOrderByAggregateInputObjectSchema as ConfigParamAvgOrderByAggregateInputObjectSchema } from './ConfigParamAvgOrderByAggregateInput.schema';
import { ConfigParamMaxOrderByAggregateInputObjectSchema as ConfigParamMaxOrderByAggregateInputObjectSchema } from './ConfigParamMaxOrderByAggregateInput.schema';
import { ConfigParamMinOrderByAggregateInputObjectSchema as ConfigParamMinOrderByAggregateInputObjectSchema } from './ConfigParamMinOrderByAggregateInput.schema';
import { ConfigParamSumOrderByAggregateInputObjectSchema as ConfigParamSumOrderByAggregateInputObjectSchema } from './ConfigParamSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  utility: SortOrderSchema.optional(),
  _count: z.lazy(() => ConfigParamCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ConfigParamAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ConfigParamMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ConfigParamMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ConfigParamSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ConfigParamOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ConfigParamOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamOrderByWithAggregationInput>;
export const ConfigParamOrderByWithAggregationInputObjectZodSchema = makeSchema();
