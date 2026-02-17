import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutTagsInputObjectSchema as TaskCreateWithoutTagsInputObjectSchema } from './TaskCreateWithoutTagsInput.schema';
import { TaskUncheckedCreateWithoutTagsInputObjectSchema as TaskUncheckedCreateWithoutTagsInputObjectSchema } from './TaskUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutTagsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutTagsInput>;
export const TaskCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
