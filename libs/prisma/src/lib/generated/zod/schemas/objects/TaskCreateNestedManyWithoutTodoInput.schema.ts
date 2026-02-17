import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutTodoInputObjectSchema as TaskCreateWithoutTodoInputObjectSchema } from './TaskCreateWithoutTodoInput.schema';
import { TaskUncheckedCreateWithoutTodoInputObjectSchema as TaskUncheckedCreateWithoutTodoInputObjectSchema } from './TaskUncheckedCreateWithoutTodoInput.schema';
import { TaskCreateOrConnectWithoutTodoInputObjectSchema as TaskCreateOrConnectWithoutTodoInputObjectSchema } from './TaskCreateOrConnectWithoutTodoInput.schema';
import { TaskCreateManyTodoInputEnvelopeObjectSchema as TaskCreateManyTodoInputEnvelopeObjectSchema } from './TaskCreateManyTodoInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutTodoInputObjectSchema), z.lazy(() => TaskCreateWithoutTodoInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutTodoInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTodoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutTodoInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutTodoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyTodoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskCreateNestedManyWithoutTodoInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedManyWithoutTodoInput>;
export const TaskCreateNestedManyWithoutTodoInputObjectZodSchema = makeSchema();
