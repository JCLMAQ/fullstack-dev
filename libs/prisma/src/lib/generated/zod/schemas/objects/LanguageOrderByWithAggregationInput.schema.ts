import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LanguageCountOrderByAggregateInputObjectSchema as LanguageCountOrderByAggregateInputObjectSchema } from './LanguageCountOrderByAggregateInput.schema';
import { LanguageAvgOrderByAggregateInputObjectSchema as LanguageAvgOrderByAggregateInputObjectSchema } from './LanguageAvgOrderByAggregateInput.schema';
import { LanguageMaxOrderByAggregateInputObjectSchema as LanguageMaxOrderByAggregateInputObjectSchema } from './LanguageMaxOrderByAggregateInput.schema';
import { LanguageMinOrderByAggregateInputObjectSchema as LanguageMinOrderByAggregateInputObjectSchema } from './LanguageMinOrderByAggregateInput.schema';
import { LanguageSumOrderByAggregateInputObjectSchema as LanguageSumOrderByAggregateInputObjectSchema } from './LanguageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  _count: z.lazy(() => LanguageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LanguageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LanguageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LanguageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LanguageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LanguageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LanguageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageOrderByWithAggregationInput>;
export const LanguageOrderByWithAggregationInputObjectZodSchema = makeSchema();
