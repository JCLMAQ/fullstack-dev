import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateWithoutUsersInputObjectSchema as TaskCreateWithoutUsersInputObjectSchema } from './TaskCreateWithoutUsersInput.schema';
import { TaskUncheckedCreateWithoutUsersInputObjectSchema as TaskUncheckedCreateWithoutUsersInputObjectSchema } from './TaskUncheckedCreateWithoutUsersInput.schema';
import { TaskCreateOrConnectWithoutUsersInputObjectSchema as TaskCreateOrConnectWithoutUsersInputObjectSchema } from './TaskCreateOrConnectWithoutUsersInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutUsersInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutUsersInput>;
export const TaskCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
