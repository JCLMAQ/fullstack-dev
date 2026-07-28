import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RefreshTokenCountOrderByAggregateInputObjectSchema as RefreshTokenCountOrderByAggregateInputObjectSchema } from './RefreshTokenCountOrderByAggregateInput.schema';
import { RefreshTokenAvgOrderByAggregateInputObjectSchema as RefreshTokenAvgOrderByAggregateInputObjectSchema } from './RefreshTokenAvgOrderByAggregateInput.schema';
import { RefreshTokenMaxOrderByAggregateInputObjectSchema as RefreshTokenMaxOrderByAggregateInputObjectSchema } from './RefreshTokenMaxOrderByAggregateInput.schema';
import { RefreshTokenMinOrderByAggregateInputObjectSchema as RefreshTokenMinOrderByAggregateInputObjectSchema } from './RefreshTokenMinOrderByAggregateInput.schema';
import { RefreshTokenSumOrderByAggregateInputObjectSchema as RefreshTokenSumOrderByAggregateInputObjectSchema } from './RefreshTokenSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  tokenId: SortOrderSchema.optional(),
  _count: z.lazy(() => RefreshTokenCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RefreshTokenAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RefreshTokenMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RefreshTokenMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RefreshTokenSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RefreshTokenOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RefreshTokenOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenOrderByWithAggregationInput>;
export const RefreshTokenOrderByWithAggregationInputObjectZodSchema = makeSchema();
