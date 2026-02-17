import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
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
export const TagTranslateMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateMaxOrderByAggregateInput>;
export const TagTranslateMaxOrderByAggregateInputObjectZodSchema = makeSchema();
