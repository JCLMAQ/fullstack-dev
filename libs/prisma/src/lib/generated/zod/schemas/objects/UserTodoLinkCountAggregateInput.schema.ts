import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  todoId: z.literal(true).optional(),
  isAuthor: z.literal(true).optional(),
  isAssigned: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserTodoLinkCountAggregateInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCountAggregateInputType>;
export const UserTodoLinkCountAggregateInputObjectZodSchema = makeSchema();
