import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateWithoutTodoInputObjectSchema as TaskCreateWithoutTodoInputObjectSchema } from './TaskCreateWithoutTodoInput.schema';
import { TaskUncheckedCreateWithoutTodoInputObjectSchema as TaskUncheckedCreateWithoutTodoInputObjectSchema } from './TaskUncheckedCreateWithoutTodoInput.schema';
import { TaskCreateOrConnectWithoutTodoInputObjectSchema as TaskCreateOrConnectWithoutTodoInputObjectSchema } from './TaskCreateOrConnectWithoutTodoInput.schema';
import { TaskUpsertWithWhereUniqueWithoutTodoInputObjectSchema as TaskUpsertWithWhereUniqueWithoutTodoInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutTodoInput.schema';
import { TaskCreateManyTodoInputEnvelopeObjectSchema as TaskCreateManyTodoInputEnvelopeObjectSchema } from './TaskCreateManyTodoInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutTodoInputObjectSchema as TaskUpdateWithWhereUniqueWithoutTodoInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutTodoInput.schema';
import { TaskUpdateManyWithWhereWithoutTodoInputObjectSchema as TaskUpdateManyWithWhereWithoutTodoInputObjectSchema } from './TaskUpdateManyWithWhereWithoutTodoInput.schema';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutTodoInputObjectSchema), z.lazy(() => TaskCreateWithoutTodoInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutTodoInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTodoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutTodoInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutTodoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskUpsertWithWhereUniqueWithoutTodoInputObjectSchema), z.lazy(() => TaskUpsertWithWhereUniqueWithoutTodoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyTodoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskUpdateWithWhereUniqueWithoutTodoInputObjectSchema), z.lazy(() => TaskUpdateWithWhereUniqueWithoutTodoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskUpdateManyWithWhereWithoutTodoInputObjectSchema), z.lazy(() => TaskUpdateManyWithWhereWithoutTodoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskScalarWhereInputObjectSchema), z.lazy(() => TaskScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskUpdateManyWithoutTodoNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithoutTodoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithoutTodoNestedInput>;
export const TaskUpdateManyWithoutTodoNestedInputObjectZodSchema = makeSchema();
