import * as z from 'zod';
export const UserPostLikeLinkGroupByResultSchema = z.array(z.object({
  user_id: z.string(),
  post_id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    user_id: z.number(),
    user: z.number(),
    post_id: z.number(),
    post: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    user_id: z.string().nullable(),
    post_id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    user_id: z.string().nullable(),
    post_id: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));