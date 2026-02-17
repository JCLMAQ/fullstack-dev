import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  definition: SortOrderSchema.optional(),
  wordId: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional()
}).strict();
export const TranslationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TranslationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationMinOrderByAggregateInput>;
export const TranslationMinOrderByAggregateInputObjectZodSchema = makeSchema();
