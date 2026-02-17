import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutApiKeysInputObjectSchema as UserCreateWithoutApiKeysInputObjectSchema } from './UserCreateWithoutApiKeysInput.schema';
import { UserUncheckedCreateWithoutApiKeysInputObjectSchema as UserUncheckedCreateWithoutApiKeysInputObjectSchema } from './UserUncheckedCreateWithoutApiKeysInput.schema';
import { UserCreateOrConnectWithoutApiKeysInputObjectSchema as UserCreateOrConnectWithoutApiKeysInputObjectSchema } from './UserCreateOrConnectWithoutApiKeysInput.schema';
import { UserUpsertWithoutApiKeysInputObjectSchema as UserUpsertWithoutApiKeysInputObjectSchema } from './UserUpsertWithoutApiKeysInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutApiKeysInputObjectSchema as UserUpdateToOneWithWhereWithoutApiKeysInputObjectSchema } from './UserUpdateToOneWithWhereWithoutApiKeysInput.schema';
import { UserUpdateWithoutApiKeysInputObjectSchema as UserUpdateWithoutApiKeysInputObjectSchema } from './UserUpdateWithoutApiKeysInput.schema';
import { UserUncheckedUpdateWithoutApiKeysInputObjectSchema as UserUncheckedUpdateWithoutApiKeysInputObjectSchema } from './UserUncheckedUpdateWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutApiKeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApiKeysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutApiKeysInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutApiKeysInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutApiKeysInputObjectSchema), z.lazy(() => UserUpdateWithoutApiKeysInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutApiKeysInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutApiKeysNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutApiKeysNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutApiKeysNestedInput>;
export const UserUpdateOneRequiredWithoutApiKeysNestedInputObjectZodSchema = makeSchema();
