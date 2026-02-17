import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numSeq: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  ownerId: z.literal(true).optional(),
  orgId: z.literal(true).optional(),
  orderTodo: z.literal(true).optional(),
  title: z.literal(true).optional(),
  content: z.literal(true).optional(),
  todoState: z.literal(true).optional(),
  mainTodoId: z.literal(true).optional()
}).strict();
export const TodoMaxAggregateInputObjectSchema: z.ZodType<Prisma.TodoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoMaxAggregateInputType>;
export const TodoMaxAggregateInputObjectZodSchema = makeSchema();
