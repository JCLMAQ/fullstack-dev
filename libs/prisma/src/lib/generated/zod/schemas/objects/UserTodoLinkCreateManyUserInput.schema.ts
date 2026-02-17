import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  todoId: z.string(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string()
}).strict();
export const UserTodoLinkCreateManyUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateManyUserInput>;
export const UserTodoLinkCreateManyUserInputObjectZodSchema = makeSchema();
