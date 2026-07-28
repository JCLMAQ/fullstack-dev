import * as z from 'zod';
export const UserTaskLinkFindManyResultSchema = z.object({
  data: z.array(z.object({
  user: z.unknown().optional(),
  userId: z.string(),
  task: z.unknown().optional(),
  taskId: z.string(),
  isAuthor: z.boolean(),
  isAssigned: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  comment: z.string()
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