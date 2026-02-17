import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutOwnerInputObjectSchema as TaskCreateWithoutOwnerInputObjectSchema } from './TaskCreateWithoutOwnerInput.schema';
import { TaskUncheckedCreateWithoutOwnerInputObjectSchema as TaskUncheckedCreateWithoutOwnerInputObjectSchema } from './TaskUncheckedCreateWithoutOwnerInput.schema';
import { TaskCreateOrConnectWithoutOwnerInputObjectSchema as TaskCreateOrConnectWithoutOwnerInputObjectSchema } from './TaskCreateOrConnectWithoutOwnerInput.schema';
import { TaskUpsertWithWhereUniqueWithoutOwnerInputObjectSchema as TaskUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { TaskCreateManyOwnerInputEnvelopeObjectSchema as TaskCreateManyOwnerInputEnvelopeObjectSchema } from './TaskCreateManyOwnerInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutOwnerInputObjectSchema as TaskUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { TaskUpdateManyWithWhereWithoutOwnerInputObjectSchema as TaskUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './TaskUpdateManyWithWhereWithoutOwnerInput.schema';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutOwnerInputObjectSchema), z.lazy(() => TaskCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskUpsertWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => TaskUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskUpdateWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => TaskUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskUpdateManyWithWhereWithoutOwnerInputObjectSchema), z.lazy(() => TaskUpdateManyWithWhereWithoutOwnerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskScalarWhereInputObjectSchema), z.lazy(() => TaskScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutOwnerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutOwnerNestedInput>;
export const TaskUncheckedUpdateManyWithoutOwnerNestedInputObjectZodSchema = makeSchema();
