import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema as TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutTagsInputObjectSchema as TaskUncheckedUpdateManyWithoutTagsInputObjectSchema } from './TaskUncheckedUpdateManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateManyMutationInputObjectSchema), z.lazy(() => TaskUncheckedUpdateManyWithoutTagsInputObjectSchema)])
}).strict();
export const TaskUpdateManyWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutTagsInput>;
export const TaskUpdateManyWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
