import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateManyTodoInputObjectSchema as TaskCreateManyTodoInputObjectSchema } from './TaskCreateManyTodoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskCreateManyTodoInputObjectSchema), z.lazy(() => TaskCreateManyTodoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskCreateManyTodoInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskCreateManyTodoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyTodoInputEnvelope>;
export const TaskCreateManyTodoInputEnvelopeObjectZodSchema = makeSchema();
