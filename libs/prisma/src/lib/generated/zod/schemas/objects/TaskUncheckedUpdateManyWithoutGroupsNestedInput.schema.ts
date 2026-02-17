import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutGroupsInputObjectSchema as TaskCreateWithoutGroupsInputObjectSchema } from './TaskCreateWithoutGroupsInput.schema';
import { TaskUncheckedCreateWithoutGroupsInputObjectSchema as TaskUncheckedCreateWithoutGroupsInputObjectSchema } from './TaskUncheckedCreateWithoutGroupsInput.schema';
import { TaskCreateOrConnectWithoutGroupsInputObjectSchema as TaskCreateOrConnectWithoutGroupsInputObjectSchema } from './TaskCreateOrConnectWithoutGroupsInput.schema';
import { TaskUpsertWithWhereUniqueWithoutGroupsInputObjectSchema as TaskUpsertWithWhereUniqueWithoutGroupsInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutGroupsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutGroupsInputObjectSchema as TaskUpdateWithWhereUniqueWithoutGroupsInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutGroupsInput.schema';
import { TaskUpdateManyWithWhereWithoutGroupsInputObjectSchema as TaskUpdateManyWithWhereWithoutGroupsInputObjectSchema } from './TaskUpdateManyWithWhereWithoutGroupsInput.schema';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutGroupsInputObjectSchema), z.lazy(() => TaskCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskUpsertWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => TaskUpsertWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskUpdateWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => TaskUpdateWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskUpdateManyWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => TaskUpdateManyWithWhereWithoutGroupsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskScalarWhereInputObjectSchema), z.lazy(() => TaskScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutGroupsNestedInput>;
export const TaskUncheckedUpdateManyWithoutGroupsNestedInputObjectZodSchema = makeSchema();
