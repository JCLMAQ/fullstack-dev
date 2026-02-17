import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateManyOrgInputObjectSchema as TaskCreateManyOrgInputObjectSchema } from './TaskCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TaskCreateManyOrgInputObjectSchema), z.lazy(() => TaskCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TaskCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.TaskCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyOrgInputEnvelope>;
export const TaskCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
