import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutMainTaskInputObjectSchema as TaskUpdateWithoutMainTaskInputObjectSchema } from './TaskUpdateWithoutMainTaskInput.schema';
import { TaskUncheckedUpdateWithoutMainTaskInputObjectSchema as TaskUncheckedUpdateWithoutMainTaskInputObjectSchema } from './TaskUncheckedUpdateWithoutMainTaskInput.schema';
import { TaskCreateWithoutMainTaskInputObjectSchema as TaskCreateWithoutMainTaskInputObjectSchema } from './TaskCreateWithoutMainTaskInput.schema';
import { TaskUncheckedCreateWithoutMainTaskInputObjectSchema as TaskUncheckedCreateWithoutMainTaskInputObjectSchema } from './TaskUncheckedCreateWithoutMainTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskUpdateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutMainTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutMainTaskInputObjectSchema)])
}).strict();
export const TaskUpsertWithWhereUniqueWithoutMainTaskInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutMainTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutMainTaskInput>;
export const TaskUpsertWithWhereUniqueWithoutMainTaskInputObjectZodSchema = makeSchema();
