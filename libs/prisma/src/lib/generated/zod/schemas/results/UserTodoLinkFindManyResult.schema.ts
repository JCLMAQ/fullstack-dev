import * as z from 'zod';
export const UserTodoLinkFindManyResultSchema = z.object({
  data: z.array(z.object({
  user: z.unknown().optional(),
  userId: z.string(),
  todo: z.unknown().optional(),
  todoId: z.string(),
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