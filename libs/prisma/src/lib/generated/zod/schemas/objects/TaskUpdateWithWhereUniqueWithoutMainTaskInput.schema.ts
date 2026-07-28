import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutMainTaskInputObjectSchema as TaskUpdateWithoutMainTaskInputObjectSchema } from './TaskUpdateWithoutMainTaskInput.schema';
import { TaskUncheckedUpdateWithoutMainTaskInputObjectSchema as TaskUncheckedUpdateWithoutMainTaskInputObjectSchema } from './TaskUncheckedUpdateWithoutMainTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutMainTaskInputObjectSchema)])
}).strict();
export const TaskUpdateWithWhereUniqueWithoutMainTaskInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutMainTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutMainTaskInput>;
export const TaskUpdateWithWhereUniqueWithoutMainTaskInputObjectZodSchema = makeSchema();
