import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const StoryAvgAggregateInputObjectSchema: z.ZodType<Prisma.StoryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StoryAvgAggregateInputType>;
export const StoryAvgAggregateInputObjectZodSchema = makeSchema();
