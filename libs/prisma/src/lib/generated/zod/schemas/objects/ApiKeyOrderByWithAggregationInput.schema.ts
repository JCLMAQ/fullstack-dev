import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ApiKeyCountOrderByAggregateInputObjectSchema as ApiKeyCountOrderByAggregateInputObjectSchema } from './ApiKeyCountOrderByAggregateInput.schema';
import { ApiKeyAvgOrderByAggregateInputObjectSchema as ApiKeyAvgOrderByAggregateInputObjectSchema } from './ApiKeyAvgOrderByAggregateInput.schema';
import { ApiKeyMaxOrderByAggregateInputObjectSchema as ApiKeyMaxOrderByAggregateInputObjectSchema } from './ApiKeyMaxOrderByAggregateInput.schema';
import { ApiKeyMinOrderByAggregateInputObjectSchema as ApiKeyMinOrderByAggregateInputObjectSchema } from './ApiKeyMinOrderByAggregateInput.schema';
import { ApiKeySumOrderByAggregateInputObjectSchema as ApiKeySumOrderByAggregateInputObjectSchema } from './ApiKeySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  key: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => ApiKeyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ApiKeyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ApiKeyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ApiKeyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ApiKeySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ApiKeyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ApiKeyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyOrderByWithAggregationInput>;
export const ApiKeyOrderByWithAggregationInputObjectZodSchema = makeSchema();
