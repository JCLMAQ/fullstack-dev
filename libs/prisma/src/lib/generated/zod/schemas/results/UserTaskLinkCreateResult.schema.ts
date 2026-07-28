import * as z from 'zod';
export const UserTaskLinkCreateResultSchema = z.object({
  user: z.unknown().optional(),
  userId: z.string(),
  task: z.unknown().optional(),
  taskId: z.string(),
  isAuthor: z.boolean(),
  isAssigned: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  comment: z.string()
});