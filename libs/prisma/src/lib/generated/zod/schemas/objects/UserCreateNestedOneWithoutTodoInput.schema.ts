import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutTodoInputObjectSchema as UserCreateWithoutTodoInputObjectSchema } from './UserCreateWithoutTodoInput.schema';
import { UserUncheckedCreateWithoutTodoInputObjectSchema as UserUncheckedCreateWithoutTodoInputObjectSchema } from './UserUncheckedCreateWithoutTodoInput.schema';
import { UserCreateOrConnectWithoutTodoInputObjectSchema as UserCreateOrConnectWithoutTodoInputObjectSchema } from './UserCreateOrConnectWithoutTodoInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTodoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTodoInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTodoInput>;
export const UserCreateNestedOneWithoutTodoInputObjectZodSchema = makeSchema();
