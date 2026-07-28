import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  todoId: z.literal(true).optional(),
  isAuthor: z.literal(true).optional(),
  isAssigned: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  comment: z.literal(true).optional()
}).strict();
export const UserTodoLinkMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserTodoLinkMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkMaxAggregateInputType>;
export const UserTodoLinkMaxAggregateInputObjectZodSchema = makeSchema();
