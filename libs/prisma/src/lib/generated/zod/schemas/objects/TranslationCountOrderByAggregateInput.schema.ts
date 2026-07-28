import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  definition: SortOrderSchema.optional(),
  wordId: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional()
}).strict();
export const TranslationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TranslationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCountOrderByAggregateInput>;
export const TranslationCountOrderByAggregateInputObjectZodSchema = makeSchema();
