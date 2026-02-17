import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateManyMainTodoInputObjectSchema as TodoCreateManyMainTodoInputObjectSchema } from './TodoCreateManyMainTodoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TodoCreateManyMainTodoInputObjectSchema), z.lazy(() => TodoCreateManyMainTodoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TodoCreateManyMainTodoInputEnvelopeObjectSchema: z.ZodType<Prisma.TodoCreateManyMainTodoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyMainTodoInputEnvelope>;
export const TodoCreateManyMainTodoInputEnvelopeObjectZodSchema = makeSchema();
