import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  user_id: z.literal(true).optional(),
  follower_id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserFollowerLinkMinAggregateInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkMinAggregateInputType>;
export const UserFollowerLinkMinAggregateInputObjectZodSchema = makeSchema();
