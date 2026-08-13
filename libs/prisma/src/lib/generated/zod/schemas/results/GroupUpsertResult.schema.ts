import * as z from 'zod';
export const GroupUpsertResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  orderGroup: z.number().int(),
  name: z.string(),
  description: z.string().nullable().optional(),
  owner: z.unknown().optional(),
  ownerId: z.string(),
  isActiv: z.date().nullable().optional(),
  Members: z.array(z.unknown()).optional(),
  Tasks: z.array(z.unknown()).optional(),
  Todos: z.array(z.unknown()).optional(),
  Posts: z.array(z.unknown()).optional(),
  Files: z.array(z.unknown()).optional(),
  org: z.unknown().optional(),
  orgId: z.string(),
  Tags: z.array(z.unknown()).optional()
});