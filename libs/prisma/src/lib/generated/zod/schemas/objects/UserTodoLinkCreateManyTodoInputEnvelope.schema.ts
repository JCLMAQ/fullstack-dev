import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkCreateManyTodoInputObjectSchema as UserTodoLinkCreateManyTodoInputObjectSchema } from './UserTodoLinkCreateManyTodoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserTodoLinkCreateManyTodoInputObjectSchema), z.lazy(() => UserTodoLinkCreateManyTodoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserTodoLinkCreateManyTodoInputEnvelopeObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateManyTodoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateManyTodoInputEnvelope>;
export const UserTodoLinkCreateManyTodoInputEnvelopeObjectZodSchema = makeSchema();
