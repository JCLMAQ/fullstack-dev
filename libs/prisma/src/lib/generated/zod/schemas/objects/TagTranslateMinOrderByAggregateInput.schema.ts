import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  translation: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  description: SortOrderSchema.optional()
}).strict();
export const TagTranslateMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateMinOrderByAggregateInput>;
export const TagTranslateMinOrderByAggregateInputObjectZodSchema = makeSchema();
