import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutTodosAuthorInputObjectSchema as UserCreateWithoutTodosAuthorInputObjectSchema } from './UserCreateWithoutTodosAuthorInput.schema';
import { UserUncheckedCreateWithoutTodosAuthorInputObjectSchema as UserUncheckedCreateWithoutTodosAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTodosAuthorInput.schema';
import { UserCreateOrConnectWithoutTodosAuthorInputObjectSchema as UserCreateOrConnectWithoutTodosAuthorInputObjectSchema } from './UserCreateOrConnectWithoutTodosAuthorInput.schema';
import { UserUpsertWithoutTodosAuthorInputObjectSchema as UserUpsertWithoutTodosAuthorInputObjectSchema } from './UserUpsertWithoutTodosAuthorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTodosAuthorInputObjectSchema as UserUpdateToOneWithWhereWithoutTodosAuthorInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTodosAuthorInput.schema';
import { UserUpdateWithoutTodosAuthorInputObjectSchema as UserUpdateWithoutTodosAuthorInputObjectSchema } from './UserUpdateWithoutTodosAuthorInput.schema';
import { UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema as UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutTodosAuthorInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosAuthorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTodosAuthorInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTodosAuthorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUpdateWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTodosAuthorNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTodosAuthorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTodosAuthorNestedInput>;
export const UserUpdateOneRequiredWithoutTodosAuthorNestedInputObjectZodSchema = makeSchema();
