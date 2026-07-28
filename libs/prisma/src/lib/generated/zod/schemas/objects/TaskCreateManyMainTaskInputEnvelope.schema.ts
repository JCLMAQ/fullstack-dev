import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateManyMainTaskInputObjectSchema as TaskCreateManyMainTaskInputObjectSchema } from './TaskCreateManyMainTaskInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskCreateManyMainTaskInputObjectSchema), z.lazy(() => TaskCreateManyMainTaskInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskCreateManyMainTaskInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskCreateManyMainTaskInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyMainTaskInputEnvelope>;
export const TaskCreateManyMainTaskInputEnvelopeObjectZodSchema = makeSchema();
