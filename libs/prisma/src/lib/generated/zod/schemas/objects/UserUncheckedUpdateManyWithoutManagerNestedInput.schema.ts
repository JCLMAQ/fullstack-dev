import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutManagerInputObjectSchema as UserCreateWithoutManagerInputObjectSchema } from './UserCreateWithoutManagerInput.schema';
import { UserUncheckedCreateWithoutManagerInputObjectSchema as UserUncheckedCreateWithoutManagerInputObjectSchema } from './UserUncheckedCreateWithoutManagerInput.schema';
import { UserCreateOrConnectWithoutManagerInputObjectSchema as UserCreateOrConnectWithoutManagerInputObjectSchema } from './UserCreateOrConnectWithoutManagerInput.schema';
import { UserUpsertWithWhereUniqueWithoutManagerInputObjectSchema as UserUpsertWithWhereUniqueWithoutManagerInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutManagerInput.schema';
import { UserCreateManyManagerInputEnvelopeObjectSchema as UserCreateManyManagerInputEnvelopeObjectSchema } from './UserCreateManyManagerInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutManagerInputObjectSchema as UserUpdateWithWhereUniqueWithoutManagerInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutManagerInput.schema';
import { UserUpdateManyWithWhereWithoutManagerInputObjectSchema as UserUpdateManyWithWhereWithoutManagerInputObjectSchema } from './UserUpdateManyWithWhereWithoutManagerInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutManagerInputObjectSchema), z.lazy(() => UserCreateWithoutManagerInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutManagerInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutManagerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutManagerInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutManagerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutManagerInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutManagerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyManagerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutManagerInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutManagerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutManagerInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutManagerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutManagerNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutManagerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutManagerNestedInput>;
export const UserUncheckedUpdateManyWithoutManagerNestedInputObjectZodSchema = makeSchema();
