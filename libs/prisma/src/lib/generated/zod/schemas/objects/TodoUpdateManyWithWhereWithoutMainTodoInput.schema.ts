import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutMainTodoInputObjectSchema as TodoUncheckedUpdateManyWithoutMainTodoInputObjectSchema } from './TodoUncheckedUpdateManyWithoutMainTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateManyMutationInputObjectSchema), z.lazy(() => TodoUncheckedUpdateManyWithoutMainTodoInputObjectSchema)])
}).strict();
export const TodoUpdateManyWithWhereWithoutMainTodoInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutMainTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutMainTodoInput>;
export const TodoUpdateManyWithWhereWithoutMainTodoInputObjectZodSchema = makeSchema();
