import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StoryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StoryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryOrderByRelationAggregateInput>;
export const StoryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
