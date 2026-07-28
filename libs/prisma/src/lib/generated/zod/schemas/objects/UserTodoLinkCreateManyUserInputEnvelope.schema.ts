import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkCreateManyUserInputObjectSchema as UserTodoLinkCreateManyUserInputObjectSchema } from './UserTodoLinkCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserTodoLinkCreateManyUserInputObjectSchema), z.lazy(() => UserTodoLinkCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserTodoLinkCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateManyUserInputEnvelope>;
export const UserTodoLinkCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
