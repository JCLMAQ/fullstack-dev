import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutTasksInputObjectSchema as UserCreateNestedOneWithoutTasksInputObjectSchema } from './UserCreateNestedOneWithoutTasksInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTasksInputObjectSchema)
}).strict();
export const UserTaskLinkCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateWithoutTaskInput>;
export const UserTaskLinkCreateWithoutTaskInputObjectZodSchema = makeSchema();
