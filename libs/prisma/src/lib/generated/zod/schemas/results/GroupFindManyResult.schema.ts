import * as z from 'zod';
export const GroupFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});