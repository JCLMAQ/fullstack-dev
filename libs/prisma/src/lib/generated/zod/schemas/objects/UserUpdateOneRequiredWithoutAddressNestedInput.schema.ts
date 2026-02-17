import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutAddressInputObjectSchema as UserCreateWithoutAddressInputObjectSchema } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputObjectSchema as UserUncheckedCreateWithoutAddressInputObjectSchema } from './UserUncheckedCreateWithoutAddressInput.schema';
import { UserCreateOrConnectWithoutAddressInputObjectSchema as UserCreateOrConnectWithoutAddressInputObjectSchema } from './UserCreateOrConnectWithoutAddressInput.schema';
import { UserUpsertWithoutAddressInputObjectSchema as UserUpsertWithoutAddressInputObjectSchema } from './UserUpsertWithoutAddressInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAddressInputObjectSchema as UserUpdateToOneWithWhereWithoutAddressInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAddressInput.schema';
import { UserUpdateWithoutAddressInputObjectSchema as UserUpdateWithoutAddressInputObjectSchema } from './UserUpdateWithoutAddressInput.schema';
import { UserUncheckedUpdateWithoutAddressInputObjectSchema as UserUncheckedUpdateWithoutAddressInputObjectSchema } from './UserUncheckedUpdateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAddressInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAddressInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAddressInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAddressInputObjectSchema), z.lazy(() => UserUpdateWithoutAddressInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAddressInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutAddressNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutAddressNestedInput>;
export const UserUpdateOneRequiredWithoutAddressNestedInputObjectZodSchema = makeSchema();
