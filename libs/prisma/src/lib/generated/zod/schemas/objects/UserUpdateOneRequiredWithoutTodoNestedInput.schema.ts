import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutTodoInputObjectSchema as UserCreateWithoutTodoInputObjectSchema } from './UserCreateWithoutTodoInput.schema';
import { UserUncheckedCreateWithoutTodoInputObjectSchema as UserUncheckedCreateWithoutTodoInputObjectSchema } from './UserUncheckedCreateWithoutTodoInput.schema';
import { UserCreateOrConnectWithoutTodoInputObjectSchema as UserCreateOrConnectWithoutTodoInputObjectSchema } from './UserCreateOrConnectWithoutTodoInput.schema';
import { UserUpsertWithoutTodoInputObjectSchema as UserUpsertWithoutTodoInputObjectSchema } from './UserUpsertWithoutTodoInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTodoInputObjectSchema as UserUpdateToOneWithWhereWithoutTodoInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTodoInput.schema';
import { UserUpdateWithoutTodoInputObjectSchema as UserUpdateWithoutTodoInputObjectSchema } from './UserUpdateWithoutTodoInput.schema';
import { UserUncheckedUpdateWithoutTodoInputObjectSchema as UserUncheckedUpdateWithoutTodoInputObjectSchema } from './UserUncheckedUpdateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTodoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTodoInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTodoInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTodoInputObjectSchema), z.lazy(() => UserUpdateWithoutTodoInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodoInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTodoNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTodoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTodoNestedInput>;
export const UserUpdateOneRequiredWithoutTodoNestedInputObjectZodSchema = makeSchema();
