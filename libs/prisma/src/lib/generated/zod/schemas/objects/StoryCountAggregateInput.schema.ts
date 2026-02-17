import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numSeq: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  caption: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StoryCountAggregateInputObjectSchema: z.ZodType<Prisma.StoryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StoryCountAggregateInputType>;
export const StoryCountAggregateInputObjectZodSchema = makeSchema();
