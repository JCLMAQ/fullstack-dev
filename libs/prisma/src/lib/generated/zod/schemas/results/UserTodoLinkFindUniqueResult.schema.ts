import * as z from 'zod';
export const UserTodoLinkFindUniqueResultSchema = z.nullable(z.object({
  user: z.unknown().optional(),
  userId: z.string(),
  todo: z.unknown().optional(),
  todoId: z.string(),
  isAuthor: z.boolean(),
  isAssigned: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  comment: z.string()
}));