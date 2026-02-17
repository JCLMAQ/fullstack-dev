import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutTagsInputObjectSchema as TaskUpdateWithoutTagsInputObjectSchema } from './TaskUpdateWithoutTagsInput.schema';
import { TaskUncheckedUpdateWithoutTagsInputObjectSchema as TaskUncheckedUpdateWithoutTagsInputObjectSchema } from './TaskUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateWithoutTagsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const TaskUpdateWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutTagsInput>;
export const TaskUpdateWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();
