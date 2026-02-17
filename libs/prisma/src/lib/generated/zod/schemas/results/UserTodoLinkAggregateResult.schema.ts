import * as z from 'zod';
export const UserTodoLinkAggregateResultSchema = z.object({  _count: z.object({
    user: z.number(),
    userId: z.number(),
    todo: z.number(),
    todoId: z.number(),
    isAuthor: z.number(),
    isAssigned: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    comment: z.number()
  }).optional(),
  _min: z.object({
    userId: z.string().nullable(),
    todoId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    comment: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    userId: z.string().nullable(),
    todoId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    comment: z.string().nullable()
  }).nullable().optional()});