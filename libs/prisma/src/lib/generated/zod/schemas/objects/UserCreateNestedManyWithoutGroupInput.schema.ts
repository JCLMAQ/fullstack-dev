import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutGroupInputObjectSchema as UserCreateWithoutGroupInputObjectSchema } from './UserCreateWithoutGroupInput.schema';
import { UserUncheckedCreateWithoutGroupInputObjectSchema as UserUncheckedCreateWithoutGroupInputObjectSchema } from './UserUncheckedCreateWithoutGroupInput.schema';
import { UserCreateOrConnectWithoutGroupInputObjectSchema as UserCreateOrConnectWithoutGroupInputObjectSchema } from './UserCreateOrConnectWithoutGroupInput.schema';
import { UserCreateManyGroupInputEnvelopeObjectSchema as UserCreateManyGroupInputEnvelopeObjectSchema } from './UserCreateManyGroupInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGroupInputObjectSchema), z.lazy(() => UserCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyGroupInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedManyWithoutGroupInput>;
export const UserCreateNestedManyWithoutGroupInputObjectZodSchema = makeSchema();
