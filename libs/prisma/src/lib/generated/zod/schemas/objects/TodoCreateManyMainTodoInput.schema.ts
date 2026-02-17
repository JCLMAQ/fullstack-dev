import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoStateSchema } from '../enums/TodoState.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  ownerId: z.string(),
  orgId: z.string().optional().nullable(),
  orderTodo: z.number().int(),
  title: z.string(),
  content: z.string().optional().nullable(),
  todoState: TodoStateSchema.optional()
}).strict();
export const TodoCreateManyMainTodoInputObjectSchema: z.ZodType<Prisma.TodoCreateManyMainTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyMainTodoInput>;
export const TodoCreateManyMainTodoInputObjectZodSchema = makeSchema();
