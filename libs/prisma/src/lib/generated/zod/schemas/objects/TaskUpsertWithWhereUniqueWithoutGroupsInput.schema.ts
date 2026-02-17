import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutGroupsInputObjectSchema as TaskUpdateWithoutGroupsInputObjectSchema } from './TaskUpdateWithoutGroupsInput.schema';
import { TaskUncheckedUpdateWithoutGroupsInputObjectSchema as TaskUncheckedUpdateWithoutGroupsInputObjectSchema } from './TaskUncheckedUpdateWithoutGroupsInput.schema';
import { TaskCreateWithoutGroupsInputObjectSchema as TaskCreateWithoutGroupsInputObjectSchema } from './TaskCreateWithoutGroupsInput.schema';
import { TaskUncheckedCreateWithoutGroupsInputObjectSchema as TaskUncheckedCreateWithoutGroupsInputObjectSchema } from './TaskUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutGroupsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const TaskUpsertWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutGroupsInput>;
export const TaskUpsertWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();
