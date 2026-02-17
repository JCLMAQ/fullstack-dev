import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutGroupsInputObjectSchema as TaskUpdateWithoutGroupsInputObjectSchema } from './TaskUpdateWithoutGroupsInput.schema';
import { TaskUncheckedUpdateWithoutGroupsInputObjectSchema as TaskUncheckedUpdateWithoutGroupsInputObjectSchema } from './TaskUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const TaskUpdateWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutGroupsInput>;
export const TaskUpdateWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();
