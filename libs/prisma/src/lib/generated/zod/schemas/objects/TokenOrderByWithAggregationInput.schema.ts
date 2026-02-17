import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TokenCountOrderByAggregateInputObjectSchema as TokenCountOrderByAggregateInputObjectSchema } from './TokenCountOrderByAggregateInput.schema';
import { TokenAvgOrderByAggregateInputObjectSchema as TokenAvgOrderByAggregateInputObjectSchema } from './TokenAvgOrderByAggregateInput.schema';
import { TokenMaxOrderByAggregateInputObjectSchema as TokenMaxOrderByAggregateInputObjectSchema } from './TokenMaxOrderByAggregateInput.schema';
import { TokenMinOrderByAggregateInputObjectSchema as TokenMinOrderByAggregateInputObjectSchema } from './TokenMinOrderByAggregateInput.schema';
import { TokenSumOrderByAggregateInputObjectSchema as TokenSumOrderByAggregateInputObjectSchema } from './TokenSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tokenId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  emailToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  valid: SortOrderSchema.optional(),
  expiration: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => TokenCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TokenAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TokenMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TokenMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TokenSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TokenOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TokenOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TokenOrderByWithAggregationInput>;
export const TokenOrderByWithAggregationInputObjectZodSchema = makeSchema();
