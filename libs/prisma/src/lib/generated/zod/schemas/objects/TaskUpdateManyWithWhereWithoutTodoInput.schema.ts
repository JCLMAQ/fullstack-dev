import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema as TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutTodoInputObjectSchema as TaskUncheckedUpdateManyWithoutTodoInputObjectSchema } from './TaskUncheckedUpdateManyWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateManyMutationInputObjectSchema), z.lazy(() => TaskUncheckedUpdateManyWithoutTodoInputObjectSchema)])
}).strict();
export const TaskUpdateManyWithWhereWithoutTodoInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutTodoInput>;
export const TaskUpdateManyWithWhereWithoutTodoInputObjectZodSchema = makeSchema();
