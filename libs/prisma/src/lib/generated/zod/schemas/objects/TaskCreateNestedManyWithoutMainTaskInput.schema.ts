import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutMainTaskInputObjectSchema as TaskCreateWithoutMainTaskInputObjectSchema } from './TaskCreateWithoutMainTaskInput.schema';
import { TaskUncheckedCreateWithoutMainTaskInputObjectSchema as TaskUncheckedCreateWithoutMainTaskInputObjectSchema } from './TaskUncheckedCreateWithoutMainTaskInput.schema';
import { TaskCreateOrConnectWithoutMainTaskInputObjectSchema as TaskCreateOrConnectWithoutMainTaskInputObjectSchema } from './TaskCreateOrConnectWithoutMainTaskInput.schema';
import { TaskCreateManyMainTaskInputEnvelopeObjectSchema as TaskCreateManyMainTaskInputEnvelopeObjectSchema } from './TaskCreateManyMainTaskInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskCreateWithoutMainTaskInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutMainTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutMainTaskInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutMainTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyMainTaskInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskCreateNestedManyWithoutMainTaskInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutMainTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedManyWithoutMainTaskInput>;
export const TaskCreateNestedManyWithoutMainTaskInputObjectZodSchema = makeSchema();
