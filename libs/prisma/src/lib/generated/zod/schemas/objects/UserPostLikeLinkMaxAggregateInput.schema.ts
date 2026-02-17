import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.literal(true).optional(),
  post_id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserPostLikeLinkMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkMaxAggregateInputType>;
export const UserPostLikeLinkMaxAggregateInputObjectZodSchema = makeSchema();
