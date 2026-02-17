import * as z from 'zod';
export const GroupUpsertResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  orderGroup: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  owner: z.unknown(),
  ownerId: z.string(),
  isActiv: z.date().optional(),
  Members: z.array(z.unknown()),
  Tasks: z.array(z.unknown()),
  Todos: z.array(z.unknown()),
  Posts: z.array(z.unknown()),
  Files: z.array(z.unknown()),
  org: z.unknown(),
  orgId: z.string(),
  Tags: z.array(z.unknown())
});