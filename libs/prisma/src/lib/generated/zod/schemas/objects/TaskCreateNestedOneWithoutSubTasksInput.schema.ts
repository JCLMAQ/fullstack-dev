import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateWithoutSubTasksInputObjectSchema as TaskCreateWithoutSubTasksInputObjectSchema } from './TaskCreateWithoutSubTasksInput.schema';
import { TaskUncheckedCreateWithoutSubTasksInputObjectSchema as TaskUncheckedCreateWithoutSubTasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubTasksInput.schema';
import { TaskCreateOrConnectWithoutSubTasksInputObjectSchema as TaskCreateOrConnectWithoutSubTasksInputObjectSchema } from './TaskCreateOrConnectWithoutSubTasksInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutSubTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutSubTasksInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutSubTasksInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutSubTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutSubTasksInput>;
export const TaskCreateNestedOneWithoutSubTasksInputObjectZodSchema = makeSchema();
