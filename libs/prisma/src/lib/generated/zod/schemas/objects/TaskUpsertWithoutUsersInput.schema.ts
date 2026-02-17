import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskUpdateWithoutUsersInputObjectSchema as TaskUpdateWithoutUsersInputObjectSchema } from './TaskUpdateWithoutUsersInput.schema';
import { TaskUncheckedUpdateWithoutUsersInputObjectSchema as TaskUncheckedUpdateWithoutUsersInputObjectSchema } from './TaskUncheckedUpdateWithoutUsersInput.schema';
import { TaskCreateWithoutUsersInputObjectSchema as TaskCreateWithoutUsersInputObjectSchema } from './TaskCreateWithoutUsersInput.schema';
import { TaskUncheckedCreateWithoutUsersInputObjectSchema as TaskUncheckedCreateWithoutUsersInputObjectSchema } from './TaskUncheckedCreateWithoutUsersInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutUsersInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutUsersInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutUsersInput>;
export const TaskUpsertWithoutUsersInputObjectZodSchema = makeSchema();
