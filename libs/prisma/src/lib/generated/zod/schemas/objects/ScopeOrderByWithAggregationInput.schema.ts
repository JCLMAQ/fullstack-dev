import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ScopeCountOrderByAggregateInputObjectSchema as ScopeCountOrderByAggregateInputObjectSchema } from './ScopeCountOrderByAggregateInput.schema';
import { ScopeAvgOrderByAggregateInputObjectSchema as ScopeAvgOrderByAggregateInputObjectSchema } from './ScopeAvgOrderByAggregateInput.schema';
import { ScopeMaxOrderByAggregateInputObjectSchema as ScopeMaxOrderByAggregateInputObjectSchema } from './ScopeMaxOrderByAggregateInput.schema';
import { ScopeMinOrderByAggregateInputObjectSchema as ScopeMinOrderByAggregateInputObjectSchema } from './ScopeMinOrderByAggregateInput.schema';
import { ScopeSumOrderByAggregateInputObjectSchema as ScopeSumOrderByAggregateInputObjectSchema } from './ScopeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scope: SortOrderSchema.optional(),
  _count: z.lazy(() => ScopeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ScopeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ScopeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ScopeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ScopeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ScopeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ScopeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeOrderByWithAggregationInput>;
export const ScopeOrderByWithAggregationInputObjectZodSchema = makeSchema();
