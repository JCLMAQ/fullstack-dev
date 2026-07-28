import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskUpdateWithoutSubTasksInputObjectSchema as TaskUpdateWithoutSubTasksInputObjectSchema } from './TaskUpdateWithoutSubTasksInput.schema';
import { TaskUncheckedUpdateWithoutSubTasksInputObjectSchema as TaskUncheckedUpdateWithoutSubTasksInputObjectSchema } from './TaskUncheckedUpdateWithoutSubTasksInput.schema';
import { TaskCreateWithoutSubTasksInputObjectSchema as TaskCreateWithoutSubTasksInputObjectSchema } from './TaskCreateWithoutSubTasksInput.schema';
import { TaskUncheckedCreateWithoutSubTasksInputObjectSchema as TaskUncheckedCreateWithoutSubTasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubTasksInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutSubTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutSubTasksInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutSubTasksInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutSubTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutSubTasksInput>;
export const TaskUpsertWithoutSubTasksInputObjectZodSchema = makeSchema();
