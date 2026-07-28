import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutMainTodoInputObjectSchema as TodoCreateWithoutMainTodoInputObjectSchema } from './TodoCreateWithoutMainTodoInput.schema';
import { TodoUncheckedCreateWithoutMainTodoInputObjectSchema as TodoUncheckedCreateWithoutMainTodoInputObjectSchema } from './TodoUncheckedCreateWithoutMainTodoInput.schema';
import { TodoCreateOrConnectWithoutMainTodoInputObjectSchema as TodoCreateOrConnectWithoutMainTodoInputObjectSchema } from './TodoCreateOrConnectWithoutMainTodoInput.schema';
import { TodoCreateManyMainTodoInputEnvelopeObjectSchema as TodoCreateManyMainTodoInputEnvelopeObjectSchema } from './TodoCreateManyMainTodoInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoCreateWithoutMainTodoInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutMainTodoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutMainTodoInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutMainTodoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyMainTodoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TodoCreateNestedManyWithoutMainTodoInputObjectSchema: z.ZodType<Prisma.TodoCreateNestedManyWithoutMainTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateNestedManyWithoutMainTodoInput>;
export const TodoCreateNestedManyWithoutMainTodoInputObjectZodSchema = makeSchema();
