import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutMainTaskInputObjectSchema as TaskCreateWithoutMainTaskInputObjectSchema } from './TaskCreateWithoutMainTaskInput.schema';
import { TaskUncheckedCreateWithoutMainTaskInputObjectSchema as TaskUncheckedCreateWithoutMainTaskInputObjectSchema } from './TaskUncheckedCreateWithoutMainTaskInput.schema';
import { TaskCreateOrConnectWithoutMainTaskInputObjectSchema as TaskCreateOrConnectWithoutMainTaskInputObjectSchema } from './TaskCreateOrConnectWithoutMainTaskInput.schema';
import { TaskUpsertWithWhereUniqueWithoutMainTaskInputObjectSchema as TaskUpsertWithWhereUniqueWithoutMainTaskInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutMainTaskInput.schema';
import { TaskCreateManyMainTaskInputEnvelopeObjectSchema as TaskCreateManyMainTaskInputEnvelopeObjectSchema } from './TaskCreateManyMainTaskInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutMainTaskInputObjectSchema as TaskUpdateWithWhereUniqueWithoutMainTaskInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutMainTaskInput.schema';
import { TaskUpdateManyWithWhereWithoutMainTaskInputObjectSchema as TaskUpdateManyWithWhereWithoutMainTaskInputObjectSchema } from './TaskUpdateManyWithWhereWithoutMainTaskInput.schema';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskCreateWithoutMainTaskInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutMainTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutMainTaskInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutMainTaskInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskUpsertWithWhereUniqueWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUpsertWithWhereUniqueWithoutMainTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyMainTaskInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskUpdateWithWhereUniqueWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUpdateWithWhereUniqueWithoutMainTaskInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskUpdateManyWithWhereWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUpdateManyWithWhereWithoutMainTaskInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskScalarWhereInputObjectSchema), z.lazy(() => TaskScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedUpdateManyWithoutMainTaskNestedInputObjectSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutMainTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutMainTaskNestedInput>;
export const TaskUncheckedUpdateManyWithoutMainTaskNestedInputObjectZodSchema = makeSchema();
