import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutGroupsInputObjectSchema as TaskCreateWithoutGroupsInputObjectSchema } from './TaskCreateWithoutGroupsInput.schema';
import { TaskUncheckedCreateWithoutGroupsInputObjectSchema as TaskUncheckedCreateWithoutGroupsInputObjectSchema } from './TaskUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutGroupsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutGroupsInput>;
export const TaskCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();
