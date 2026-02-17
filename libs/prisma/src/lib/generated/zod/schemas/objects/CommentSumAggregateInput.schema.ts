import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderComment: z.literal(true).optional()
}).strict();
export const CommentSumAggregateInputObjectSchema: z.ZodType<Prisma.CommentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentSumAggregateInputType>;
export const CommentSumAggregateInputObjectZodSchema = makeSchema();
