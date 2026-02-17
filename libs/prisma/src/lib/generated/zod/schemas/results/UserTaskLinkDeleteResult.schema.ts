import * as z from 'zod';
export const UserTaskLinkDeleteResultSchema = z.nullable(z.object({
  user: z.unknown(),
  userId: z.string(),
  task: z.unknown(),
  taskId: z.string(),
  isAuthor: z.boolean(),
  isAssigned: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  comment: z.string()
}));