import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutUsersInputObjectSchema as TaskUpdateWithoutUsersInputObjectSchema } from './TaskUpdateWithoutUsersInput.schema';
import { TaskUncheckedUpdateWithoutUsersInputObjectSchema as TaskUncheckedUpdateWithoutUsersInputObjectSchema } from './TaskUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutUsersInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutUsersInput>;
export const TaskUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
