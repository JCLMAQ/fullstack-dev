import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateWithoutMainTodoInputObjectSchema as TodoCreateWithoutMainTodoInputObjectSchema } from './TodoCreateWithoutMainTodoInput.schema';
import { TodoUncheckedCreateWithoutMainTodoInputObjectSchema as TodoUncheckedCreateWithoutMainTodoInputObjectSchema } from './TodoUncheckedCreateWithoutMainTodoInput.schema';
import { TodoCreateOrConnectWithoutMainTodoInputObjectSchema as TodoCreateOrConnectWithoutMainTodoInputObjectSchema } from './TodoCreateOrConnectWithoutMainTodoInput.schema';
import { TodoUpsertWithWhereUniqueWithoutMainTodoInputObjectSchema as TodoUpsertWithWhereUniqueWithoutMainTodoInputObjectSchema } from './TodoUpsertWithWhereUniqueWithoutMainTodoInput.schema';
import { TodoCreateManyMainTodoInputEnvelopeObjectSchema as TodoCreateManyMainTodoInputEnvelopeObjectSchema } from './TodoCreateManyMainTodoInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithWhereUniqueWithoutMainTodoInputObjectSchema as TodoUpdateWithWhereUniqueWithoutMainTodoInputObjectSchema } from './TodoUpdateWithWhereUniqueWithoutMainTodoInput.schema';
import { TodoUpdateManyWithWhereWithoutMainTodoInputObjectSchema as TodoUpdateManyWithWhereWithoutMainTodoInputObjectSchema } from './TodoUpdateManyWithWhereWithoutMainTodoInput.schema';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoCreateWithoutMainTodoInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutMainTodoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutMainTodoInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutMainTodoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TodoUpsertWithWhereUniqueWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUpsertWithWhereUniqueWithoutMainTodoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyMainTodoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TodoUpdateWithWhereUniqueWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUpdateWithWhereUniqueWithoutMainTodoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TodoUpdateManyWithWhereWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUpdateManyWithWhereWithoutMainTodoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TodoUpdateManyWithoutMainTodoNestedInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithoutMainTodoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithoutMainTodoNestedInput>;
export const TodoUpdateManyWithoutMainTodoNestedInputObjectZodSchema = makeSchema();
