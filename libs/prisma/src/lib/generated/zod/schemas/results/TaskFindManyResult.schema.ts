import * as z from 'zod';
export const TaskFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  isPublic: z.boolean(),
  owner: z.unknown().optional(),
  ownerId: z.string(),
  org: z.unknown().optional(),
  orgId: z.string().nullable().optional(),
  groups: z.array(z.unknown()).optional(),
  orderTask: z.number().int(),
  title: z.string(),
  content: z.string().nullable().optional(),
  taskState: z.unknown(),
  mainTask: z.unknown().optional(),
  mainTaskId: z.string().nullable().optional(),
  SubTasks: z.array(z.unknown()).optional(),
  Users: z.array(z.unknown()).optional(),
  todo: z.unknown().optional(),
  todoId: z.string().nullable().optional(),
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