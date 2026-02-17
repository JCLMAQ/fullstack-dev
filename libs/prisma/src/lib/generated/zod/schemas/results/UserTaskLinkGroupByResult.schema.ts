import * as z from 'zod';
export const UserTaskLinkGroupByResultSchema = z.array(z.object({
  userId: z.string(),
  taskId: z.string(),
  isAuthor: z.boolean(),
  isAssigned: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  comment: z.string(),
  _count: z.object({
    user: z.number(),
    userId: z.number(),
    task: z.number(),
    taskId: z.number(),
    isAuthor: z.number(),
    isAssigned: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    comment: z.number()
  }).optional(),
  _min: z.object({
    userId: z.string().nullable(),
    taskId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    comment: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    userId: z.string().nullable(),
    taskId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    comment: z.string().nullable()
  }).nullable().optional()
}));