import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTaskLinkCreateManyUserInputObjectSchema as UserTaskLinkCreateManyUserInputObjectSchema } from './UserTaskLinkCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserTaskLinkCreateManyUserInputObjectSchema), z.lazy(() => UserTaskLinkCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserTaskLinkCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateManyUserInputEnvelope>;
export const UserTaskLinkCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
