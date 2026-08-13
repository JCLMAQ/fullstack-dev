import * as z from 'zod';
export const StoryUpsertResultSchema = z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().nullable().optional(),
  isPublic: z.boolean().nullable().optional(),
  isDeleted: z.number().int().nullable().optional(),
  isDeletedDT: z.date().nullable().optional(),
  caption: z.string(),
  user_id: z.string(),
  user: z.unknown().optional(),
  Images: z.array(z.unknown()).optional(),
  Files: z.array(z.unknown()).optional()
});