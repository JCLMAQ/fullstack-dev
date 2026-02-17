import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema';
import { TodoUpdateWithoutSubTodosInputObjectSchema as TodoUpdateWithoutSubTodosInputObjectSchema } from './TodoUpdateWithoutSubTodosInput.schema';
import { TodoUncheckedUpdateWithoutSubTodosInputObjectSchema as TodoUncheckedUpdateWithoutSubTodosInputObjectSchema } from './TodoUncheckedUpdateWithoutSubTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TodoUpdateWithoutSubTodosInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutSubTodosInputObjectSchema)])
}).strict();
export const TodoUpdateToOneWithWhereWithoutSubTodosInputObjectSchema: z.ZodType<Prisma.TodoUpdateToOneWithWhereWithoutSubTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateToOneWithWhereWithoutSubTodosInput>;
export const TodoUpdateToOneWithWhereWithoutSubTodosInputObjectZodSchema = makeSchema();
