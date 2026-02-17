import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const StoryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StoryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryAvgOrderByAggregateInput>;
export const StoryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
