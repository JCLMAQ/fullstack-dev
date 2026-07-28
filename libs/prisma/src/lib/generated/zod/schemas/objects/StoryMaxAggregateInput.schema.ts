import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


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
  user_id: z.literal(true).optional()
}).strict();
export const StoryMaxAggregateInputObjectSchema: z.ZodType<Prisma.StoryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StoryMaxAggregateInputType>;
export const StoryMaxAggregateInputObjectZodSchema = makeSchema();
