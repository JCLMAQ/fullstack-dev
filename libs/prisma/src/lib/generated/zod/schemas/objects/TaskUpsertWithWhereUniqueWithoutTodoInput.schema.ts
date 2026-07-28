import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutTodoInputObjectSchema as TaskUpdateWithoutTodoInputObjectSchema } from './TaskUpdateWithoutTodoInput.schema';
import { TaskUncheckedUpdateWithoutTodoInputObjectSchema as TaskUncheckedUpdateWithoutTodoInputObjectSchema } from './TaskUncheckedUpdateWithoutTodoInput.schema';
import { TaskCreateWithoutTodoInputObjectSchema as TaskCreateWithoutTodoInputObjectSchema } from './TaskCreateWithoutTodoInput.schema';
import { TaskUncheckedCreateWithoutTodoInputObjectSchema as TaskUncheckedCreateWithoutTodoInputObjectSchema } from './TaskUncheckedCreateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskUpdateWithoutTodoInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutTodoInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutTodoInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTodoInputObjectSchema)])
}).strict();
export const TaskUpsertWithWhereUniqueWithoutTodoInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutTodoInput>;
export const TaskUpsertWithWhereUniqueWithoutTodoInputObjectZodSchema = makeSchema();
