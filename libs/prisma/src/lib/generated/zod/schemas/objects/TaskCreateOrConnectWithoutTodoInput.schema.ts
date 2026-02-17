import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutTodoInputObjectSchema as TaskCreateWithoutTodoInputObjectSchema } from './TaskCreateWithoutTodoInput.schema';
import { TaskUncheckedCreateWithoutTodoInputObjectSchema as TaskUncheckedCreateWithoutTodoInputObjectSchema } from './TaskUncheckedCreateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutTodoInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTodoInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutTodoInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutTodoInput>;
export const TaskCreateOrConnectWithoutTodoInputObjectZodSchema = makeSchema();
