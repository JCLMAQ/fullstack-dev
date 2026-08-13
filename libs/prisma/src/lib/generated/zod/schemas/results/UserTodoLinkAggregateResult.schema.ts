import * as z from 'zod';
export const UserTodoLinkAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    userId: z.number().optional(),
    todoId: z.number().optional(),
    isAuthor: z.number().optional(),
    isAssigned: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    comment: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _min: z.object({
    userId: z.string().nullable().optional(),
    todoId: z.string().nullable().optional(),
    isAuthor: z.boolean().nullable().optional(),
    isAssigned: z.boolean().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    comment: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    userId: z.string().nullable().optional(),
    todoId: z.string().nullable().optional(),
    isAuthor: z.boolean().nullable().optional(),
    isAssigned: z.boolean().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    comment: z.string().nullable().optional()
  }).nullable().optional()});