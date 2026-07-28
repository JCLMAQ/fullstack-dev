import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateManyOwnerInputObjectSchema as TaskCreateManyOwnerInputObjectSchema } from './TaskCreateManyOwnerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskCreateManyOwnerInputObjectSchema), z.lazy(() => TaskCreateManyOwnerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskCreateManyOwnerInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskCreateManyOwnerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyOwnerInputEnvelope>;
export const TaskCreateManyOwnerInputEnvelopeObjectZodSchema = makeSchema();
