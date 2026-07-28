import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutTasksInputObjectSchema as UserUpdateWithoutTasksInputObjectSchema } from './UserUpdateWithoutTasksInput.schema';
import { UserUncheckedUpdateWithoutTasksInputObjectSchema as UserUncheckedUpdateWithoutTasksInputObjectSchema } from './UserUncheckedUpdateWithoutTasksInput.schema';
import { UserCreateWithoutTasksInputObjectSchema as UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema as UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTasksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTasksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTasksInput>;
export const UserUpsertWithoutTasksInputObjectZodSchema = makeSchema();
