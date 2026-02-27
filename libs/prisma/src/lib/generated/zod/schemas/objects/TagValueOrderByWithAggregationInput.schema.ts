import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagValueCountOrderByAggregateInputObjectSchema as TagValueCountOrderByAggregateInputObjectSchema } from './TagValueCountOrderByAggregateInput.schema';
import { TagValueAvgOrderByAggregateInputObjectSchema as TagValueAvgOrderByAggregateInputObjectSchema } from './TagValueAvgOrderByAggregateInput.schema';
import { TagValueMaxOrderByAggregateInputObjectSchema as TagValueMaxOrderByAggregateInputObjectSchema } from './TagValueMaxOrderByAggregateInput.schema';
import { TagValueMinOrderByAggregateInputObjectSchema as TagValueMinOrderByAggregateInputObjectSchema } from './TagValueMinOrderByAggregateInput.schema';
import { TagValueSumOrderByAggregateInputObjectSchema as TagValueSumOrderByAggregateInputObjectSchema } from './TagValueSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tagCategoriesId: SortOrderSchema.optional(),
  mainTagId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TagValueCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TagValueAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TagValueMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TagValueMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TagValueSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TagValueOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TagValueOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueOrderByWithAggregationInput>;
export const TagValueOrderByWithAggregationInputObjectZodSchema = makeSchema();
