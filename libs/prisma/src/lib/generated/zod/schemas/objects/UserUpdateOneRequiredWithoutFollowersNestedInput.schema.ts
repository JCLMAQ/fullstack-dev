import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutFollowersInputObjectSchema as UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema as UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema';
import { UserCreateOrConnectWithoutFollowersInputObjectSchema as UserCreateOrConnectWithoutFollowersInputObjectSchema } from './UserCreateOrConnectWithoutFollowersInput.schema';
import { UserUpsertWithoutFollowersInputObjectSchema as UserUpsertWithoutFollowersInputObjectSchema } from './UserUpsertWithoutFollowersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFollowersInputObjectSchema as UserUpdateToOneWithWhereWithoutFollowersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFollowersInput.schema';
import { UserUpdateWithoutFollowersInputObjectSchema as UserUpdateWithoutFollowersInputObjectSchema } from './UserUpdateWithoutFollowersInput.schema';
import { UserUncheckedUpdateWithoutFollowersInputObjectSchema as UserUncheckedUpdateWithoutFollowersInputObjectSchema } from './UserUncheckedUpdateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFollowersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFollowersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFollowersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFollowersInputObjectSchema), z.lazy(() => UserUpdateWithoutFollowersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowersNestedInput>;
export const UserUpdateOneRequiredWithoutFollowersNestedInputObjectZodSchema = makeSchema();
