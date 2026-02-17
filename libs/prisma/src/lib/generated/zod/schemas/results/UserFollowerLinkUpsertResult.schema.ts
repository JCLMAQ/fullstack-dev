import * as z from 'zod';
export const UserFollowerLinkUpsertResultSchema = z.object({
  user_id: z.string(),
  user: z.unknown(),
  follower_id: z.string(),
  follower: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});