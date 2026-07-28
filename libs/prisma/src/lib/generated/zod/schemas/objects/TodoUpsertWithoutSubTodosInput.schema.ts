import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoUpdateWithoutSubTodosInputObjectSchema as TodoUpdateWithoutSubTodosInputObjectSchema } from './TodoUpdateWithoutSubTodosInput.schema';
import { TodoUncheckedUpdateWithoutSubTodosInputObjectSchema as TodoUncheckedUpdateWithoutSubTodosInputObjectSchema } from './TodoUncheckedUpdateWithoutSubTodosInput.schema';
import { TodoCreateWithoutSubTodosInputObjectSchema as TodoCreateWithoutSubTodosInputObjectSchema } from './TodoCreateWithoutSubTodosInput.schema';
import { TodoUncheckedCreateWithoutSubTodosInputObjectSchema as TodoUncheckedCreateWithoutSubTodosInputObjectSchema } from './TodoUncheckedCreateWithoutSubTodosInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TodoUpdateWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutSubTodosInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutSubTodosInputObjectSchema)]),
  where: z.lazy(() => TodoWhereInputObjectSchema).optional()
}).strict();
export const TodoUpsertWithoutSubTodosInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithoutSubTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithoutSubTodosInput>;
export const TodoUpsertWithoutSubTodosInputObjectZodSchema = makeSchema();
