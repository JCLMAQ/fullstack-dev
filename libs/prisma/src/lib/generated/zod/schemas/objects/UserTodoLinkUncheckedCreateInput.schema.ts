import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  todoId: z.string(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  comment: z.string()
}).strict();
export const UserTodoLinkUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUncheckedCreateInput>;
export const UserTodoLinkUncheckedCreateInputObjectZodSchema = makeSchema();
