import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TodoWhereInputObjectSchema).optional(),
  some: z.lazy(() => TodoWhereInputObjectSchema).optional(),
  none: z.lazy(() => TodoWhereInputObjectSchema).optional()
}).strict();
export const TodoListRelationFilterObjectSchema: z.ZodType<Prisma.TodoListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TodoListRelationFilter>;
export const TodoListRelationFilterObjectZodSchema = makeSchema();
