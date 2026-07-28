import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutOrgsInputObjectSchema as UserCreateWithoutOrgsInputObjectSchema } from './UserCreateWithoutOrgsInput.schema';
import { UserUncheckedCreateWithoutOrgsInputObjectSchema as UserUncheckedCreateWithoutOrgsInputObjectSchema } from './UserUncheckedCreateWithoutOrgsInput.schema';
import { UserCreateOrConnectWithoutOrgsInputObjectSchema as UserCreateOrConnectWithoutOrgsInputObjectSchema } from './UserCreateOrConnectWithoutOrgsInput.schema';
import { UserUpsertWithWhereUniqueWithoutOrgsInputObjectSchema as UserUpsertWithWhereUniqueWithoutOrgsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutOrgsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutOrgsInputObjectSchema as UserUpdateWithWhereUniqueWithoutOrgsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutOrgsInput.schema';
import { UserUpdateManyWithWhereWithoutOrgsInputObjectSchema as UserUpdateManyWithWhereWithoutOrgsInputObjectSchema } from './UserUpdateManyWithWhereWithoutOrgsInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrgsInputObjectSchema), z.lazy(() => UserCreateWithoutOrgsInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutOrgsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrgsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutOrgsInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutOrgsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutOrgsInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutOrgsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutOrgsInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutOrgsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutOrgsInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutOrgsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutOrgsNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutOrgsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutOrgsNestedInput>;
export const UserUncheckedUpdateManyWithoutOrgsNestedInputObjectZodSchema = makeSchema();
