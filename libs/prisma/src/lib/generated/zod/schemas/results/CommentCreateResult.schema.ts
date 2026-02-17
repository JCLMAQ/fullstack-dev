import * as z from 'zod';
export const CommentCreateResultSchema = z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.date().optional(),
  orderComment: z.number().int(),
  content: z.string().optional(),
  post: z.unknown(),
  postId: z.string(),
  author: z.unknown(),
  authorId: z.string(),
  Files: z.array(z.unknown())
});