import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  user_id: z.literal(true).optional(),
  post_id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserPostLikeLinkCountAggregateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCountAggregateInputType>;
export const UserPostLikeLinkCountAggregateInputObjectZodSchema = makeSchema();
