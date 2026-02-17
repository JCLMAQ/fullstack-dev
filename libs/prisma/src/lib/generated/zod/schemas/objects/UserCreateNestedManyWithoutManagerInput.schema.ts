import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutManagerInputObjectSchema as UserCreateWithoutManagerInputObjectSchema } from './UserCreateWithoutManagerInput.schema';
import { UserUncheckedCreateWithoutManagerInputObjectSchema as UserUncheckedCreateWithoutManagerInputObjectSchema } from './UserUncheckedCreateWithoutManagerInput.schema';
import { UserCreateOrConnectWithoutManagerInputObjectSchema as UserCreateOrConnectWithoutManagerInputObjectSchema } from './UserCreateOrConnectWithoutManagerInput.schema';
import { UserCreateManyManagerInputEnvelopeObjectSchema as UserCreateManyManagerInputEnvelopeObjectSchema } from './UserCreateManyManagerInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutManagerInputObjectSchema), z.lazy(() => UserCreateWithoutManagerInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutManagerInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutManagerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutManagerInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutManagerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyManagerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserCreateNestedManyWithoutManagerInputObjectSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutManagerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedManyWithoutManagerInput>;
export const UserCreateNestedManyWithoutManagerInputObjectZodSchema = makeSchema();
