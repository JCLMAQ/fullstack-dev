import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutOrgInputObjectSchema as TaskCreateWithoutOrgInputObjectSchema } from './TaskCreateWithoutOrgInput.schema';
import { TaskUncheckedCreateWithoutOrgInputObjectSchema as TaskUncheckedCreateWithoutOrgInputObjectSchema } from './TaskUncheckedCreateWithoutOrgInput.schema';
import { TaskCreateOrConnectWithoutOrgInputObjectSchema as TaskCreateOrConnectWithoutOrgInputObjectSchema } from './TaskCreateOrConnectWithoutOrgInput.schema';
import { TaskUpsertWithWhereUniqueWithoutOrgInputObjectSchema as TaskUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutOrgInput.schema';
import { TaskCreateManyOrgInputEnvelopeObjectSchema as TaskCreateManyOrgInputEnvelopeObjectSchema } from './TaskCreateManyOrgInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutOrgInputObjectSchema as TaskUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutOrgInput.schema';
import { TaskUpdateManyWithWhereWithoutOrgInputObjectSchema as TaskUpdateManyWithWhereWithoutOrgInputObjectSchema } from './TaskUpdateManyWithWhereWithoutOrgInput.schema';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutOrgInputObjectSchema), z.lazy(() => TaskCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TaskUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => TaskUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TaskUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => TaskUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TaskUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => TaskUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TaskScalarWhereInputObjectSchema), z.lazy(() => TaskScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutOrgNestedInput>;
export const TaskUncheckedUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();
