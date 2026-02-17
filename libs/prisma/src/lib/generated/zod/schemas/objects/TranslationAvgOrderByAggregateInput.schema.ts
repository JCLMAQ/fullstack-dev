import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  wordId: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional()
}).strict();
export const TranslationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TranslationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationAvgOrderByAggregateInput>;
export const TranslationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
