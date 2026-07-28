import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutUsersInputObjectSchema as TaskCreateWithoutUsersInputObjectSchema } from './TaskCreateWithoutUsersInput.schema';
import { TaskUncheckedCreateWithoutUsersInputObjectSchema as TaskUncheckedCreateWithoutUsersInputObjectSchema } from './TaskUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutUsersInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutUsersInput>;
export const TaskCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
