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
  orderComment: z.literal(true).optional(),
  content: z.literal(true).optional(),
  postId: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CommentCountAggregateInputObjectSchema: z.ZodType<Prisma.CommentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentCountAggregateInputType>;
export const CommentCountAggregateInputObjectZodSchema = makeSchema();
