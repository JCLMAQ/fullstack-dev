import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutSubTasksInputObjectSchema as TaskCreateWithoutSubTasksInputObjectSchema } from './TaskCreateWithoutSubTasksInput.schema';
import { TaskUncheckedCreateWithoutSubTasksInputObjectSchema as TaskUncheckedCreateWithoutSubTasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutSubTasksInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutSubTasksInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutSubTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutSubTasksInput>;
export const TaskCreateOrConnectWithoutSubTasksInputObjectZodSchema = makeSchema();
