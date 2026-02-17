import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutMainTaskInputObjectSchema as TaskCreateWithoutMainTaskInputObjectSchema } from './TaskCreateWithoutMainTaskInput.schema';
import { TaskUncheckedCreateWithoutMainTaskInputObjectSchema as TaskUncheckedCreateWithoutMainTaskInputObjectSchema } from './TaskUncheckedCreateWithoutMainTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutMainTaskInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutMainTaskInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutMainTaskInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutMainTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutMainTaskInput>;
export const TaskCreateOrConnectWithoutMainTaskInputObjectZodSchema = makeSchema();
