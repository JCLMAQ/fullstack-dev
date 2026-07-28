import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutSubTasksInputObjectSchema as TaskUpdateWithoutSubTasksInputObjectSchema } from './TaskUpdateWithoutSubTasksInput.schema';
import { TaskUncheckedUpdateWithoutSubTasksInputObjectSchema as TaskUncheckedUpdateWithoutSubTasksInputObjectSchema } from './TaskUncheckedUpdateWithoutSubTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutSubTasksInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutSubTasksInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutSubTasksInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutSubTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutSubTasksInput>;
export const TaskUpdateToOneWithWhereWithoutSubTasksInputObjectZodSchema = makeSchema();
