import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema as TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutOwnerInputObjectSchema as TaskUncheckedUpdateManyWithoutOwnerInputObjectSchema } from './TaskUncheckedUpdateManyWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateManyMutationInputObjectSchema), z.lazy(() => TaskUncheckedUpdateManyWithoutOwnerInputObjectSchema)])
}).strict();
export const TaskUpdateManyWithWhereWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutOwnerInput>;
export const TaskUpdateManyWithWhereWithoutOwnerInputObjectZodSchema = makeSchema();
