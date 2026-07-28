import * as z from 'zod';
export const UserPostLikeLinkFindUniqueResultSchema = z.nullable(z.object({
  user_id: z.string(),
  user: z.unknown().optional(),
  post_id: z.string(),
  post: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));