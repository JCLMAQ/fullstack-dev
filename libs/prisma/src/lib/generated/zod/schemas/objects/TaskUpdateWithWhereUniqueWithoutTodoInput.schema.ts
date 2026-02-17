import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutTodoInputObjectSchema as TaskUpdateWithoutTodoInputObjectSchema } from './TaskUpdateWithoutTodoInput.schema';
import { TaskUncheckedUpdateWithoutTodoInputObjectSchema as TaskUncheckedUpdateWithoutTodoInputObjectSchema } from './TaskUncheckedUpdateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateWithoutTodoInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutTodoInputObjectSchema)])
}).strict();
export const TaskUpdateWithWhereUniqueWithoutTodoInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutTodoInput>;
export const TaskUpdateWithWhereUniqueWithoutTodoInputObjectZodSchema = makeSchema();
