import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutLanguageInputObjectSchema as UserCreateWithoutLanguageInputObjectSchema } from './UserCreateWithoutLanguageInput.schema';
import { UserUncheckedCreateWithoutLanguageInputObjectSchema as UserUncheckedCreateWithoutLanguageInputObjectSchema } from './UserUncheckedCreateWithoutLanguageInput.schema';
import { UserCreateOrConnectWithoutLanguageInputObjectSchema as UserCreateOrConnectWithoutLanguageInputObjectSchema } from './UserCreateOrConnectWithoutLanguageInput.schema';
import { UserUpsertWithWhereUniqueWithoutLanguageInputObjectSchema as UserUpsertWithWhereUniqueWithoutLanguageInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutLanguageInput.schema';
import { UserCreateManyLanguageInputEnvelopeObjectSchema as UserCreateManyLanguageInputEnvelopeObjectSchema } from './UserCreateManyLanguageInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutLanguageInputObjectSchema as UserUpdateWithWhereUniqueWithoutLanguageInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutLanguageInput.schema';
import { UserUpdateManyWithWhereWithoutLanguageInputObjectSchema as UserUpdateManyWithWhereWithoutLanguageInputObjectSchema } from './UserUpdateManyWithWhereWithoutLanguageInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLanguageInputObjectSchema), z.lazy(() => UserCreateWithoutLanguageInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutLanguageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutLanguageInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutLanguageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutLanguageInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutLanguageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyLanguageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutLanguageInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutLanguageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutLanguageInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutLanguageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutLanguageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutLanguageNestedInput>;
export const UserUncheckedUpdateManyWithoutLanguageNestedInputObjectZodSchema = makeSchema();
