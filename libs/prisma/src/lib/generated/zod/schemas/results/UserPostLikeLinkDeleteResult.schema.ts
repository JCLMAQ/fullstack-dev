import * as z from 'zod';
export const UserPostLikeLinkDeleteResultSchema = z.nullable(z.object({
  user_id: z.string(),
  user: z.unknown(),
  post_id: z.string(),
  post: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));