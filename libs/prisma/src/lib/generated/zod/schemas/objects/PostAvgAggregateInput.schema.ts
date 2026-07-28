import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderPost: z.literal(true).optional()
}).strict();
export const PostAvgAggregateInputObjectSchema: z.ZodType<Prisma.PostAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostAvgAggregateInputType>;
export const PostAvgAggregateInputObjectZodSchema = makeSchema();
