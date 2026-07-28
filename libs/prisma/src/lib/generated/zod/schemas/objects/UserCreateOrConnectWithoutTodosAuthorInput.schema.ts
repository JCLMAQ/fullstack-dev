import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTodosAuthorInputObjectSchema as UserCreateWithoutTodosAuthorInputObjectSchema } from './UserCreateWithoutTodosAuthorInput.schema';
import { UserUncheckedCreateWithoutTodosAuthorInputObjectSchema as UserUncheckedCreateWithoutTodosAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTodosAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosAuthorInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTodosAuthorInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTodosAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTodosAuthorInput>;
export const UserCreateOrConnectWithoutTodosAuthorInputObjectZodSchema = makeSchema();
