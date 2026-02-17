import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskScalarWhereInputObjectSchema as TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';
import { TaskUpdateManyMutationInputObjectSchema as TaskUpdateManyMutationInputObjectSchema } from './TaskUpdateManyMutationInput.schema';
import { TaskUncheckedUpdateManyWithoutOrgInputObjectSchema as TaskUncheckedUpdateManyWithoutOrgInputObjectSchema } from './TaskUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateManyMutationInputObjectSchema), z.lazy(() => TaskUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const TaskUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutOrgInput>;
export const TaskUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();
