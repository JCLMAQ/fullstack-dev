import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const TagTranslateAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateAvgOrderByAggregateInput>;
export const TagTranslateAvgOrderByAggregateInputObjectZodSchema = makeSchema();
