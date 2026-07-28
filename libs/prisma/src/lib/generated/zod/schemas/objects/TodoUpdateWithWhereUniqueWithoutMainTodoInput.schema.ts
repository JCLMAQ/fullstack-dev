import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutMainTodoInputObjectSchema as TodoUpdateWithoutMainTodoInputObjectSchema } from './TodoUpdateWithoutMainTodoInput.schema';
import { TodoUncheckedUpdateWithoutMainTodoInputObjectSchema as TodoUncheckedUpdateWithoutMainTodoInputObjectSchema } from './TodoUncheckedUpdateWithoutMainTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateWithoutMainTodoInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutMainTodoInputObjectSchema)])
}).strict();
export const TodoUpdateWithWhereUniqueWithoutMainTodoInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutMainTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutMainTodoInput>;
export const TodoUpdateWithWhereUniqueWithoutMainTodoInputObjectZodSchema = makeSchema();
