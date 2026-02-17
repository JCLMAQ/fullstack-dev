import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema as TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutMainTaskInputObjectSchema as TaskUncheckedUpdateManyWithoutMainTaskInputObjectSchema } from './TaskUncheckedUpdateManyWithoutMainTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateManyMutationInputObjectSchema), z.lazy(() => TaskUncheckedUpdateManyWithoutMainTaskInputObjectSchema)])
}).strict();
export const TaskUpdateManyWithWhereWithoutMainTaskInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutMainTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutMainTaskInput>;
export const TaskUpdateManyWithWhereWithoutMainTaskInputObjectZodSchema = makeSchema();
