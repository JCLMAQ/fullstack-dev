import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkCreateManyTaskInputObjectSchema as UserTaskLinkCreateManyTaskInputObjectSchema } from './UserTaskLinkCreateManyTaskInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserTaskLinkCreateManyTaskInputObjectSchema), z.lazy(() => UserTaskLinkCreateManyTaskInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserTaskLinkCreateManyTaskInputEnvelopeObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateManyTaskInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateManyTaskInputEnvelope>;
export const UserTaskLinkCreateManyTaskInputEnvelopeObjectZodSchema = makeSchema();
