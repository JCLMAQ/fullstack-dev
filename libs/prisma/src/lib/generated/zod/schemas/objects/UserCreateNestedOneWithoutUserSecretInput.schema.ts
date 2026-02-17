import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutUserSecretInputObjectSchema as UserCreateWithoutUserSecretInputObjectSchema } from './UserCreateWithoutUserSecretInput.schema';
import { UserUncheckedCreateWithoutUserSecretInputObjectSchema as UserUncheckedCreateWithoutUserSecretInputObjectSchema } from './UserUncheckedCreateWithoutUserSecretInput.schema';
import { UserCreateOrConnectWithoutUserSecretInputObjectSchema as UserCreateOrConnectWithoutUserSecretInputObjectSchema } from './UserCreateOrConnectWithoutUserSecretInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserSecretInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserSecretInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserSecretInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUserSecretInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserSecretInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutUserSecretInput>;
export const UserCreateNestedOneWithoutUserSecretInputObjectZodSchema = makeSchema();
