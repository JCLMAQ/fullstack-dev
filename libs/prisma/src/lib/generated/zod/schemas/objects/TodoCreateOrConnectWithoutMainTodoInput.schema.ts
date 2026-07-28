import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutMainTodoInputObjectSchema as TodoCreateWithoutMainTodoInputObjectSchema } from './TodoCreateWithoutMainTodoInput.schema';
import { TodoUncheckedCreateWithoutMainTodoInputObjectSchema as TodoUncheckedCreateWithoutMainTodoInputObjectSchema } from './TodoUncheckedCreateWithoutMainTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutMainTodoInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutMainTodoInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutMainTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutMainTodoInput>;
export const TodoCreateOrConnectWithoutMainTodoInputObjectZodSchema = makeSchema();
