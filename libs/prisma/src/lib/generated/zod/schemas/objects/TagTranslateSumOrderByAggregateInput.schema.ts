import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const TagTranslateSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateSumOrderByAggregateInput>;
export const TagTranslateSumOrderByAggregateInputObjectZodSchema = makeSchema();
