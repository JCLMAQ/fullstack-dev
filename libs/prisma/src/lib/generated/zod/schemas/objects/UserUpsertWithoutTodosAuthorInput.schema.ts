import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutTodosAuthorInputObjectSchema as UserUpdateWithoutTodosAuthorInputObjectSchema } from './UserUpdateWithoutTodosAuthorInput.schema';
import { UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema as UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutTodosAuthorInput.schema';
import { UserCreateWithoutTodosAuthorInputObjectSchema as UserCreateWithoutTodosAuthorInputObjectSchema } from './UserCreateWithoutTodosAuthorInput.schema';
import { UserUncheckedCreateWithoutTodosAuthorInputObjectSchema as UserUncheckedCreateWithoutTodosAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTodosAuthorInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosAuthorInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTodosAuthorInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTodosAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTodosAuthorInput>;
export const UserUpsertWithoutTodosAuthorInputObjectZodSchema = makeSchema();
