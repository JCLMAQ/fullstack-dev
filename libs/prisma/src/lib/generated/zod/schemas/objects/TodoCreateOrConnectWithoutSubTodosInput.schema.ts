import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutSubTodosInputObjectSchema as TodoCreateWithoutSubTodosInputObjectSchema } from './TodoCreateWithoutSubTodosInput.schema';
import { TodoUncheckedCreateWithoutSubTodosInputObjectSchema as TodoUncheckedCreateWithoutSubTodosInputObjectSchema } from './TodoUncheckedCreateWithoutSubTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutSubTodosInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutSubTodosInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutSubTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutSubTodosInput>;
export const TodoCreateOrConnectWithoutSubTodosInputObjectZodSchema = makeSchema();
