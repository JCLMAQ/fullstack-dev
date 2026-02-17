import * as z from 'zod';
export const StoryUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.date().optional(),
  caption: z.string(),
  user_id: z.string(),
  user: z.unknown(),
  Images: z.array(z.unknown()),
  Files: z.array(z.unknown())
}));