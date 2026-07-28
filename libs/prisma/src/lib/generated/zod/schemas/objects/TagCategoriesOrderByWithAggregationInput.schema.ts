import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagCategoriesCountOrderByAggregateInputObjectSchema as TagCategoriesCountOrderByAggregateInputObjectSchema } from './TagCategoriesCountOrderByAggregateInput.schema';
import { TagCategoriesAvgOrderByAggregateInputObjectSchema as TagCategoriesAvgOrderByAggregateInputObjectSchema } from './TagCategoriesAvgOrderByAggregateInput.schema';
import { TagCategoriesMaxOrderByAggregateInputObjectSchema as TagCategoriesMaxOrderByAggregateInputObjectSchema } from './TagCategoriesMaxOrderByAggregateInput.schema';
import { TagCategoriesMinOrderByAggregateInputObjectSchema as TagCategoriesMinOrderByAggregateInputObjectSchema } from './TagCategoriesMinOrderByAggregateInput.schema';
import { TagCategoriesSumOrderByAggregateInputObjectSchema as TagCategoriesSumOrderByAggregateInputObjectSchema } from './TagCategoriesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modelName: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  recordId: SortOrderSchema.optional(),
  _count: z.lazy(() => TagCategoriesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TagCategoriesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TagCategoriesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TagCategoriesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TagCategoriesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TagCategoriesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TagCategoriesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesOrderByWithAggregationInput>;
export const TagCategoriesOrderByWithAggregationInputObjectZodSchema = makeSchema();
