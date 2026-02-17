import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutLanguageInputObjectSchema as UserCreateWithoutLanguageInputObjectSchema } from './UserCreateWithoutLanguageInput.schema';
import { UserUncheckedCreateWithoutLanguageInputObjectSchema as UserUncheckedCreateWithoutLanguageInputObjectSchema } from './UserUncheckedCreateWithoutLanguageInput.schema';
import { UserCreateOrConnectWithoutLanguageInputObjectSchema as UserCreateOrConnectWithoutLanguageInputObjectSchema } from './UserCreateOrConnectWithoutLanguageInput.schema';
import { UserCreateManyLanguageInputEnvelopeObjectSchema as UserCreateManyLanguageInputEnvelopeObjectSchema } from './UserCreateManyLanguageInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLanguageInputObjectSchema), z.lazy(() => UserCreateWithoutLanguageInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutLanguageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutLanguageInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutLanguageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyLanguageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutLanguageInput>;
export const UserUncheckedCreateNestedManyWithoutLanguageInputObjectZodSchema = makeSchema();
