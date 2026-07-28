import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TagValueOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TagValueOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueOrderByRelationAggregateInput>;
export const TagValueOrderByRelationAggregateInputObjectZodSchema = makeSchema();
