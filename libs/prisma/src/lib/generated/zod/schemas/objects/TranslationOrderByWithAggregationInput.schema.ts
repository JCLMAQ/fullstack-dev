import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TranslationCountOrderByAggregateInputObjectSchema as TranslationCountOrderByAggregateInputObjectSchema } from './TranslationCountOrderByAggregateInput.schema';
import { TranslationAvgOrderByAggregateInputObjectSchema as TranslationAvgOrderByAggregateInputObjectSchema } from './TranslationAvgOrderByAggregateInput.schema';
import { TranslationMaxOrderByAggregateInputObjectSchema as TranslationMaxOrderByAggregateInputObjectSchema } from './TranslationMaxOrderByAggregateInput.schema';
import { TranslationMinOrderByAggregateInputObjectSchema as TranslationMinOrderByAggregateInputObjectSchema } from './TranslationMinOrderByAggregateInput.schema';
import { TranslationSumOrderByAggregateInputObjectSchema as TranslationSumOrderByAggregateInputObjectSchema } from './TranslationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  definition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  wordId: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  _count: z.lazy(() => TranslationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TranslationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TranslationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TranslationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TranslationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TranslationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TranslationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationOrderByWithAggregationInput>;
export const TranslationOrderByWithAggregationInputObjectZodSchema = makeSchema();
