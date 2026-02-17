import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutSubTasksInputObjectSchema as TaskCreateWithoutSubTasksInputObjectSchema } from './TaskCreateWithoutSubTasksInput.schema';
import { TaskUncheckedCreateWithoutSubTasksInputObjectSchema as TaskUncheckedCreateWithoutSubTasksInputObjectSchema } from './TaskUncheckedCreateWithoutSubTasksInput.schema';
import { TaskCreateOrConnectWithoutSubTasksInputObjectSchema as TaskCreateOrConnectWithoutSubTasksInputObjectSchema } from './TaskCreateOrConnectWithoutSubTasksInput.schema';
import { TaskUpsertWithoutSubTasksInputObjectSchema as TaskUpsertWithoutSubTasksInputObjectSchema } from './TaskUpsertWithoutSubTasksInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutSubTasksInputObjectSchema as TaskUpdateToOneWithWhereWithoutSubTasksInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutSubTasksInput.schema';
import { TaskUpdateWithoutSubTasksInputObjectSchema as TaskUpdateWithoutSubTasksInputObjectSchema } from './TaskUpdateWithoutSubTasksInput.schema';
import { TaskUncheckedUpdateWithoutSubTasksInputObjectSchema as TaskUncheckedUpdateWithoutSubTasksInputObjectSchema } from './TaskUncheckedUpdateWithoutSubTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutSubTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutSubTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutSubTasksInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUpdateWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutSubTasksInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneWithoutSubTasksNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneWithoutSubTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneWithoutSubTasksNestedInput>;
export const TaskUpdateOneWithoutSubTasksNestedInputObjectZodSchema = makeSchema();
