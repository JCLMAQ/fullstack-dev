import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateWithoutTagsInputObjectSchema as TaskCreateWithoutTagsInputObjectSchema } from './TaskCreateWithoutTagsInput.schema';
import { TaskUncheckedCreateWithoutTagsInputObjectSchema as TaskUncheckedCreateWithoutTagsInputObjectSchema } from './TaskUncheckedCreateWithoutTagsInput.schema';
import { TaskCreateOrConnectWithoutTagsInputObjectSchema as TaskCreateOrConnectWithoutTagsInputObjectSchema } from './TaskCreateOrConnectWithoutTagsInput.schema';
import { TaskUpsertWithWhereUniqueWithoutTagsInputObjectSchema as TaskUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutTagsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutTagsInputObjectSchema as TaskUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutTagsInput.schema';
import { TaskUpdateManyWithWhereWithoutTagsInputObjectSchema as TaskUpdateManyWithWhereWithoutTagsInputObjectSchema } from './TaskUpdateManyWithWhereWithoutTagsInput.schema';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutTagsInputObjectSchema), z.lazy(() => TaskCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskUpsertWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => TaskUpsertWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskUpdateWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => TaskUpdateWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskUpdateManyWithWhereWithoutTagsInputObjectSchema), z.lazy(() => TaskUpdateManyWithWhereWithoutTagsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskScalarWhereInputObjectSchema), z.lazy(() => TaskScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskUpdateManyWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithoutTagsNestedInput>;
export const TaskUpdateManyWithoutTagsNestedInputObjectZodSchema = makeSchema();
