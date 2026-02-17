import * as z from 'zod';
export const ProfileUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  orderProfile: z.number().int(),
  Users: z.array(z.unknown()),
  bio: z.string()
}));