import * as z from 'zod';
export const ProfileUpsertResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  orderProfile: z.number().int(),
  Users: z.array(z.unknown()).optional(),
  bio: z.string()
});