import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutTodosAuthorInputObjectSchema as UserCreateWithoutTodosAuthorInputObjectSchema } from './UserCreateWithoutTodosAuthorInput.schema';
import { UserUncheckedCreateWithoutTodosAuthorInputObjectSchema as UserUncheckedCreateWithoutTodosAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTodosAuthorInput.schema';
import { UserCreateOrConnectWithoutTodosAuthorInputObjectSchema as UserCreateOrConnectWithoutTodosAuthorInputObjectSchema } from './UserCreateOrConnectWithoutTodosAuthorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosAuthorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTodosAuthorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTodosAuthorInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTodosAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTodosAuthorInput>;
export const UserCreateNestedOneWithoutTodosAuthorInputObjectZodSchema = makeSchema();
