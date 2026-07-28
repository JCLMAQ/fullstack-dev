import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutSubTodosInputObjectSchema as TodoCreateWithoutSubTodosInputObjectSchema } from './TodoCreateWithoutSubTodosInput.schema';
import { TodoUncheckedCreateWithoutSubTodosInputObjectSchema as TodoUncheckedCreateWithoutSubTodosInputObjectSchema } from './TodoUncheckedCreateWithoutSubTodosInput.schema';
import { TodoCreateOrConnectWithoutSubTodosInputObjectSchema as TodoCreateOrConnectWithoutSubTodosInputObjectSchema } from './TodoCreateOrConnectWithoutSubTodosInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutSubTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TodoCreateOrConnectWithoutSubTodosInputObjectSchema).optional(),
  connect: z.lazy(() => TodoWhereUniqueInputObjectSchema).optional()
}).strict();
export const TodoCreateNestedOneWithoutSubTodosInputObjectSchema: z.ZodType<Prisma.TodoCreateNestedOneWithoutSubTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateNestedOneWithoutSubTodosInput>;
export const TodoCreateNestedOneWithoutSubTodosInputObjectZodSchema = makeSchema();
