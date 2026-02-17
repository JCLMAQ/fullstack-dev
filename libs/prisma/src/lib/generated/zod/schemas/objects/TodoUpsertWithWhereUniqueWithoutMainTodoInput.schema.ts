import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutMainTodoInputObjectSchema as TodoUpdateWithoutMainTodoInputObjectSchema } from './TodoUpdateWithoutMainTodoInput.schema';
import { TodoUncheckedUpdateWithoutMainTodoInputObjectSchema as TodoUncheckedUpdateWithoutMainTodoInputObjectSchema } from './TodoUncheckedUpdateWithoutMainTodoInput.schema';
import { TodoCreateWithoutMainTodoInputObjectSchema as TodoCreateWithoutMainTodoInputObjectSchema } from './TodoCreateWithoutMainTodoInput.schema';
import { TodoUncheckedCreateWithoutMainTodoInputObjectSchema as TodoUncheckedCreateWithoutMainTodoInputObjectSchema } from './TodoUncheckedCreateWithoutMainTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TodoUpdateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutMainTodoInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutMainTodoInputObjectSchema)])
}).strict();
export const TodoUpsertWithWhereUniqueWithoutMainTodoInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutMainTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutMainTodoInput>;
export const TodoUpsertWithWhereUniqueWithoutMainTodoInputObjectZodSchema = makeSchema();
