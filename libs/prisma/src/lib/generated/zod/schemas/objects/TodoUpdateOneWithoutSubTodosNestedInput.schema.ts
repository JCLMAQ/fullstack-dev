import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutSubTodosInputObjectSchema as TodoCreateWithoutSubTodosInputObjectSchema } from './TodoCreateWithoutSubTodosInput.schema';
import { TodoUncheckedCreateWithoutSubTodosInputObjectSchema as TodoUncheckedCreateWithoutSubTodosInputObjectSchema } from './TodoUncheckedCreateWithoutSubTodosInput.schema';
import { TodoCreateOrConnectWithoutSubTodosInputObjectSchema as TodoCreateOrConnectWithoutSubTodosInputObjectSchema } from './TodoCreateOrConnectWithoutSubTodosInput.schema';
import { TodoUpsertWithoutSubTodosInputObjectSchema as TodoUpsertWithoutSubTodosInputObjectSchema } from './TodoUpsertWithoutSubTodosInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateToOneWithWhereWithoutSubTodosInputObjectSchema as TodoUpdateToOneWithWhereWithoutSubTodosInputObjectSchema } from './TodoUpdateToOneWithWhereWithoutSubTodosInput.schema';
import { TodoUpdateWithoutSubTodosInputObjectSchema as TodoUpdateWithoutSubTodosInputObjectSchema } from './TodoUpdateWithoutSubTodosInput.schema';
import { TodoUncheckedUpdateWithoutSubTodosInputObjectSchema as TodoUncheckedUpdateWithoutSubTodosInputObjectSchema } from './TodoUncheckedUpdateWithoutSubTodosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutSubTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TodoCreateOrConnectWithoutSubTodosInputObjectSchema).optional(),
  upsert: z.lazy(() => TodoUpsertWithoutSubTodosInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TodoWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TodoWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TodoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TodoUpdateToOneWithWhereWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUpdateWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutSubTodosInputObjectSchema)]).optional()
}).strict();
export const TodoUpdateOneWithoutSubTodosNestedInputObjectSchema: z.ZodType<Prisma.TodoUpdateOneWithoutSubTodosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateOneWithoutSubTodosNestedInput>;
export const TodoUpdateOneWithoutSubTodosNestedInputObjectZodSchema = makeSchema();
