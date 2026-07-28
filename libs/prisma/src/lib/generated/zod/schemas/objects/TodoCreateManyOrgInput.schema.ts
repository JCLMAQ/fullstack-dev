import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
  orderTodo: z.number().int(),
  title: z.string(),
  content: z.string().optional().nullable(),
  todoState: TodoStateSchema.optional(),
  mainTodoId: z.string().optional().nullable()
}).strict();
export const TodoCreateManyOrgInputObjectSchema: z.ZodType<Prisma.TodoCreateManyOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyOrgInput>;
export const TodoCreateManyOrgInputObjectZodSchema = makeSchema();
