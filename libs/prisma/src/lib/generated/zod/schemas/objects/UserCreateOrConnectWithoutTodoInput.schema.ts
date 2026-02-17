import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTodoInputObjectSchema as UserCreateWithoutTodoInputObjectSchema } from './UserCreateWithoutTodoInput.schema';
import { UserUncheckedCreateWithoutTodoInputObjectSchema as UserUncheckedCreateWithoutTodoInputObjectSchema } from './UserUncheckedCreateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTodoInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodoInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTodoInput>;
export const UserCreateOrConnectWithoutTodoInputObjectZodSchema = makeSchema();
