import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCreateWithoutUsersInputObjectSchema as TaskCreateWithoutUsersInputObjectSchema } from './TaskCreateWithoutUsersInput.schema';
import { TaskUncheckedCreateWithoutUsersInputObjectSchema as TaskUncheckedCreateWithoutUsersInputObjectSchema } from './TaskUncheckedCreateWithoutUsersInput.schema';
import { TaskCreateOrConnectWithoutUsersInputObjectSchema as TaskCreateOrConnectWithoutUsersInputObjectSchema } from './TaskCreateOrConnectWithoutUsersInput.schema';
import { TaskUpsertWithoutUsersInputObjectSchema as TaskUpsertWithoutUsersInputObjectSchema } from './TaskUpsertWithoutUsersInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutUsersInputObjectSchema as TaskUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutUsersInput.schema';
import { TaskUpdateWithoutUsersInputObjectSchema as TaskUpdateWithoutUsersInputObjectSchema } from './TaskUpdateWithoutUsersInput.schema';
import { TaskUncheckedUpdateWithoutUsersInputObjectSchema as TaskUncheckedUpdateWithoutUsersInputObjectSchema } from './TaskUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutUsersInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => TaskUpdateWithoutUsersInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutUsersNestedInput>;
export const TaskUpdateOneRequiredWithoutUsersNestedInputObjectZodSchema = makeSchema();
