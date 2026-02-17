import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutProfilesInputObjectSchema as UserCreateWithoutProfilesInputObjectSchema } from './UserCreateWithoutProfilesInput.schema';
import { UserUncheckedCreateWithoutProfilesInputObjectSchema as UserUncheckedCreateWithoutProfilesInputObjectSchema } from './UserUncheckedCreateWithoutProfilesInput.schema';
import { UserCreateOrConnectWithoutProfilesInputObjectSchema as UserCreateOrConnectWithoutProfilesInputObjectSchema } from './UserCreateOrConnectWithoutProfilesInput.schema';
import { UserUpsertWithWhereUniqueWithoutProfilesInputObjectSchema as UserUpsertWithWhereUniqueWithoutProfilesInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutProfilesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutProfilesInputObjectSchema as UserUpdateWithWhereUniqueWithoutProfilesInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutProfilesInput.schema';
import { UserUpdateManyWithWhereWithoutProfilesInputObjectSchema as UserUpdateManyWithWhereWithoutProfilesInputObjectSchema } from './UserUpdateManyWithWhereWithoutProfilesInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfilesInputObjectSchema), z.lazy(() => UserCreateWithoutProfilesInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutProfilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutProfilesInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutProfilesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutProfilesInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutProfilesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutProfilesInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutProfilesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutProfilesInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutProfilesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUpdateManyWithoutProfilesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithoutProfilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithoutProfilesNestedInput>;
export const UserUpdateManyWithoutProfilesNestedInputObjectZodSchema = makeSchema();
