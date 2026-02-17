import * as z from 'zod';
export const UserTodoLinkUpdateResultSchema = z.nullable(z.object({
  user: z.unknown(),
  userId: z.string(),
  todo: z.unknown(),
  todoId: z.string(),
  isAuthor: z.boolean(),
  isAssigned: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  comment: z.string()
}));