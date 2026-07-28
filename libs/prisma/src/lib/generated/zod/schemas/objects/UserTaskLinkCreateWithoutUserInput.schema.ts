import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateNestedOneWithoutUsersInputObjectSchema as TaskCreateNestedOneWithoutUsersInputObjectSchema } from './TaskCreateNestedOneWithoutUsersInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string(),
  task: z.lazy(() => TaskCreateNestedOneWithoutUsersInputObjectSchema)
}).strict();
export const UserTaskLinkCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateWithoutUserInput>;
export const UserTaskLinkCreateWithoutUserInputObjectZodSchema = makeSchema();
