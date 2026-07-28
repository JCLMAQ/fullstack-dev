import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutTodoInputObjectSchema as UserUpdateWithoutTodoInputObjectSchema } from './UserUpdateWithoutTodoInput.schema';
import { UserUncheckedUpdateWithoutTodoInputObjectSchema as UserUncheckedUpdateWithoutTodoInputObjectSchema } from './UserUncheckedUpdateWithoutTodoInput.schema';
import { UserCreateWithoutTodoInputObjectSchema as UserCreateWithoutTodoInputObjectSchema } from './UserCreateWithoutTodoInput.schema';
import { UserUncheckedCreateWithoutTodoInputObjectSchema as UserUncheckedCreateWithoutTodoInputObjectSchema } from './UserUncheckedCreateWithoutTodoInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTodoInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodoInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTodoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodoInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTodoInput>;
export const UserUpsertWithoutTodoInputObjectZodSchema = makeSchema();
