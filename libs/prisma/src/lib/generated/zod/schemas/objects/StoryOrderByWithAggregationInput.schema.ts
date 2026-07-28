import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StoryCountOrderByAggregateInputObjectSchema as StoryCountOrderByAggregateInputObjectSchema } from './StoryCountOrderByAggregateInput.schema';
import { StoryAvgOrderByAggregateInputObjectSchema as StoryAvgOrderByAggregateInputObjectSchema } from './StoryAvgOrderByAggregateInput.schema';
import { StoryMaxOrderByAggregateInputObjectSchema as StoryMaxOrderByAggregateInputObjectSchema } from './StoryMaxOrderByAggregateInput.schema';
import { StoryMinOrderByAggregateInputObjectSchema as StoryMinOrderByAggregateInputObjectSchema } from './StoryMinOrderByAggregateInput.schema';
import { StorySumOrderByAggregateInputObjectSchema as StorySumOrderByAggregateInputObjectSchema } from './StorySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  caption: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  _count: z.lazy(() => StoryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StoryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StoryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StorySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StoryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryOrderByWithAggregationInput>;
export const StoryOrderByWithAggregationInputObjectZodSchema = makeSchema();
