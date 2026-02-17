import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOrgsInputObjectSchema as UserCreateWithoutOrgsInputObjectSchema } from './UserCreateWithoutOrgsInput.schema';
import { UserUncheckedCreateWithoutOrgsInputObjectSchema as UserUncheckedCreateWithoutOrgsInputObjectSchema } from './UserUncheckedCreateWithoutOrgsInput.schema';
import { UserCreateOrConnectWithoutOrgsInputObjectSchema as UserCreateOrConnectWithoutOrgsInputObjectSchema } from './UserCreateOrConnectWithoutOrgsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrgsInputObjectSchema), z.lazy(() => UserCreateWithoutOrgsInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutOrgsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrgsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutOrgsInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutOrgsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserCreateNestedManyWithoutOrgsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutOrgsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedManyWithoutOrgsInput>;
export const UserCreateNestedManyWithoutOrgsInputObjectZodSchema = makeSchema();
