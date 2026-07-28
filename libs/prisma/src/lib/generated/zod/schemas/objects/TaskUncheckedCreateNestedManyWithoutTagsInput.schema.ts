import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateWithoutTagsInputObjectSchema as TaskCreateWithoutTagsInputObjectSchema } from './TaskCreateWithoutTagsInput.schema';
import { TaskUncheckedCreateWithoutTagsInputObjectSchema as TaskUncheckedCreateWithoutTagsInputObjectSchema } from './TaskUncheckedCreateWithoutTagsInput.schema';
import { TaskCreateOrConnectWithoutTagsInputObjectSchema as TaskCreateOrConnectWithoutTagsInputObjectSchema } from './TaskCreateOrConnectWithoutTagsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutTagsInputObjectSchema), z.lazy(() => TaskCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedCreateNestedManyWithoutTagsInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutTagsInput>;
export const TaskUncheckedCreateNestedManyWithoutTagsInputObjectZodSchema = makeSchema();
