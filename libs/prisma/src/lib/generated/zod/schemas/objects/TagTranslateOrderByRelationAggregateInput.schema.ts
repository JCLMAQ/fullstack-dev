import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TagTranslateOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateOrderByRelationAggregateInput>;
export const TagTranslateOrderByRelationAggregateInputObjectZodSchema = makeSchema();
