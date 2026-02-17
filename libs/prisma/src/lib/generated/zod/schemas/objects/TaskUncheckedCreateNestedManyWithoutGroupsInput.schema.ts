import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutGroupsInputObjectSchema as TaskCreateWithoutGroupsInputObjectSchema } from './TaskCreateWithoutGroupsInput.schema';
import { TaskUncheckedCreateWithoutGroupsInputObjectSchema as TaskUncheckedCreateWithoutGroupsInputObjectSchema } from './TaskUncheckedCreateWithoutGroupsInput.schema';
import { TaskCreateOrConnectWithoutGroupsInputObjectSchema as TaskCreateOrConnectWithoutGroupsInputObjectSchema } from './TaskCreateOrConnectWithoutGroupsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutGroupsInputObjectSchema), z.lazy(() => TaskCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedCreateNestedManyWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutGroupsInput>;
export const TaskUncheckedCreateNestedManyWithoutGroupsInputObjectZodSchema = makeSchema();
