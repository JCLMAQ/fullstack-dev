import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutTagsInputObjectSchema as TaskUpdateWithoutTagsInputObjectSchema } from './TaskUpdateWithoutTagsInput.schema';
import { TaskUncheckedUpdateWithoutTagsInputObjectSchema as TaskUncheckedUpdateWithoutTagsInputObjectSchema } from './TaskUncheckedUpdateWithoutTagsInput.schema';
import { TaskCreateWithoutTagsInputObjectSchema as TaskCreateWithoutTagsInputObjectSchema } from './TaskCreateWithoutTagsInput.schema';
import { TaskUncheckedCreateWithoutTagsInputObjectSchema as TaskUncheckedCreateWithoutTagsInputObjectSchema } from './TaskUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskUpdateWithoutTagsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutTagsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const TaskUpsertWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutTagsInput>;
export const TaskUpsertWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();
