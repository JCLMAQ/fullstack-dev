import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutGroupInputObjectSchema as UserCreateWithoutGroupInputObjectSchema } from './UserCreateWithoutGroupInput.schema';
import { UserUncheckedCreateWithoutGroupInputObjectSchema as UserUncheckedCreateWithoutGroupInputObjectSchema } from './UserUncheckedCreateWithoutGroupInput.schema';
import { UserCreateOrConnectWithoutGroupInputObjectSchema as UserCreateOrConnectWithoutGroupInputObjectSchema } from './UserCreateOrConnectWithoutGroupInput.schema';
import { UserUpsertWithWhereUniqueWithoutGroupInputObjectSchema as UserUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutGroupInput.schema';
import { UserCreateManyGroupInputEnvelopeObjectSchema as UserCreateManyGroupInputEnvelopeObjectSchema } from './UserCreateManyGroupInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutGroupInputObjectSchema as UserUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutGroupInput.schema';
import { UserUpdateManyWithWhereWithoutGroupInputObjectSchema as UserUpdateManyWithWhereWithoutGroupInputObjectSchema } from './UserUpdateManyWithWhereWithoutGroupInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGroupInputObjectSchema), z.lazy(() => UserCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithoutGroupNestedInput>;
export const UserUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
