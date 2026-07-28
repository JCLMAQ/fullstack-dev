import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  wordId: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional()
}).strict();
export const TranslationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TranslationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationSumOrderByAggregateInput>;
export const TranslationSumOrderByAggregateInputObjectZodSchema = makeSchema();
