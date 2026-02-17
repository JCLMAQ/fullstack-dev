import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutUserSecretInputObjectSchema as UserCreateWithoutUserSecretInputObjectSchema } from './UserCreateWithoutUserSecretInput.schema';
import { UserUncheckedCreateWithoutUserSecretInputObjectSchema as UserUncheckedCreateWithoutUserSecretInputObjectSchema } from './UserUncheckedCreateWithoutUserSecretInput.schema';
import { UserCreateOrConnectWithoutUserSecretInputObjectSchema as UserCreateOrConnectWithoutUserSecretInputObjectSchema } from './UserCreateOrConnectWithoutUserSecretInput.schema';
import { UserUpsertWithoutUserSecretInputObjectSchema as UserUpsertWithoutUserSecretInputObjectSchema } from './UserUpsertWithoutUserSecretInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUserSecretInputObjectSchema as UserUpdateToOneWithWhereWithoutUserSecretInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUserSecretInput.schema';
import { UserUpdateWithoutUserSecretInputObjectSchema as UserUpdateWithoutUserSecretInputObjectSchema } from './UserUpdateWithoutUserSecretInput.schema';
import { UserUncheckedUpdateWithoutUserSecretInputObjectSchema as UserUncheckedUpdateWithoutUserSecretInputObjectSchema } from './UserUncheckedUpdateWithoutUserSecretInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserSecretInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserSecretInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserSecretInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserSecretInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUserSecretInputObjectSchema), z.lazy(() => UserUpdateWithoutUserSecretInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUserSecretInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutUserSecretNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserSecretNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserSecretNestedInput>;
export const UserUpdateOneRequiredWithoutUserSecretNestedInputObjectZodSchema = makeSchema();
