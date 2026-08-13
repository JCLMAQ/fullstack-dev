import * as z from 'zod';
export const CommentFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().nullable().optional(),
  isPublic: z.boolean().nullable().optional(),
  isDeleted: z.number().int().nullable().optional(),
  isDeletedDT: z.date().nullable().optional(),
  orderComment: z.number().int(),
  content: z.string().nullable().optional(),
  post: z.unknown().optional(),
  postId: z.string(),
  author: z.unknown().optional(),
  authorId: z.string(),
  Files: z.array(z.unknown()).optional()
}));