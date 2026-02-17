import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserSecretInputObjectSchema as UserCreateWithoutUserSecretInputObjectSchema } from './UserCreateWithoutUserSecretInput.schema';
import { UserUncheckedCreateWithoutUserSecretInputObjectSchema as UserUncheckedCreateWithoutUserSecretInputObjectSchema } from './UserUncheckedCreateWithoutUserSecretInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUserSecretInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserSecretInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUserSecretInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserSecretInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutUserSecretInput>;
export const UserCreateOrConnectWithoutUserSecretInputObjectZodSchema = makeSchema();
