import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WordCountOrderByAggregateInputObjectSchema as WordCountOrderByAggregateInputObjectSchema } from './WordCountOrderByAggregateInput.schema';
import { WordAvgOrderByAggregateInputObjectSchema as WordAvgOrderByAggregateInputObjectSchema } from './WordAvgOrderByAggregateInput.schema';
import { WordMaxOrderByAggregateInputObjectSchema as WordMaxOrderByAggregateInputObjectSchema } from './WordMaxOrderByAggregateInput.schema';
import { WordMinOrderByAggregateInputObjectSchema as WordMinOrderByAggregateInputObjectSchema } from './WordMinOrderByAggregateInput.schema';
import { WordSumOrderByAggregateInputObjectSchema as WordSumOrderByAggregateInputObjectSchema } from './WordSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  slug: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  _count: z.lazy(() => WordCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WordAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WordMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WordMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WordSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WordOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WordOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WordOrderByWithAggregationInput>;
export const WordOrderByWithAggregationInputObjectZodSchema = makeSchema();
