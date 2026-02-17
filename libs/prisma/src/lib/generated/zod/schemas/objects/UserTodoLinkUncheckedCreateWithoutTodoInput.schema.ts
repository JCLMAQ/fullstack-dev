import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string()
}).strict();
export const UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUncheckedCreateWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUncheckedCreateWithoutTodoInput>;
export const UserTodoLinkUncheckedCreateWithoutTodoInputObjectZodSchema = makeSchema();
