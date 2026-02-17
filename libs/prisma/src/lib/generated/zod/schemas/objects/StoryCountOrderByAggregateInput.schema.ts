import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  caption: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional()
}).strict();
export const StoryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StoryCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCountOrderByAggregateInput>;
export const StoryCountOrderByAggregateInputObjectZodSchema = makeSchema();
