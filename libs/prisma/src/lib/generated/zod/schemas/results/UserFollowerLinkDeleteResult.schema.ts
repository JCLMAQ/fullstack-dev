import * as z from 'zod';
export const UserFollowerLinkDeleteResultSchema = z.nullable(z.object({
  user_id: z.string(),
  user: z.unknown().optional(),
  follower_id: z.string(),
  follower: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));