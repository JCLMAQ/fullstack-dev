import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema as TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutGroupsInputObjectSchema as TaskUncheckedUpdateManyWithoutGroupsInputObjectSchema } from './TaskUncheckedUpdateManyWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateManyMutationInputObjectSchema), z.lazy(() => TaskUncheckedUpdateManyWithoutGroupsInputObjectSchema)])
}).strict();
export const TaskUpdateManyWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutGroupsInput>;
export const TaskUpdateManyWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();
