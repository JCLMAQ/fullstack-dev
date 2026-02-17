import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagTranslateCountOrderByAggregateInputObjectSchema as TagTranslateCountOrderByAggregateInputObjectSchema } from './TagTranslateCountOrderByAggregateInput.schema';
import { TagTranslateAvgOrderByAggregateInputObjectSchema as TagTranslateAvgOrderByAggregateInputObjectSchema } from './TagTranslateAvgOrderByAggregateInput.schema';
import { TagTranslateMaxOrderByAggregateInputObjectSchema as TagTranslateMaxOrderByAggregateInputObjectSchema } from './TagTranslateMaxOrderByAggregateInput.schema';
import { TagTranslateMinOrderByAggregateInputObjectSchema as TagTranslateMinOrderByAggregateInputObjectSchema } from './TagTranslateMinOrderByAggregateInput.schema';
import { TagTranslateSumOrderByAggregateInputObjectSchema as TagTranslateSumOrderByAggregateInputObjectSchema } from './TagTranslateSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  translation: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TagTranslateCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TagTranslateAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TagTranslateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TagTranslateMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TagTranslateSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TagTranslateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TagTranslateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateOrderByWithAggregationInput>;
export const TagTranslateOrderByWithAggregationInputObjectZodSchema = makeSchema();
