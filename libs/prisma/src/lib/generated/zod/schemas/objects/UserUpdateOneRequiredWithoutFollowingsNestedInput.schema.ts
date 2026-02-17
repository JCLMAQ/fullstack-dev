import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutFollowingsInputObjectSchema as UserCreateWithoutFollowingsInputObjectSchema } from './UserCreateWithoutFollowingsInput.schema';
import { UserUncheckedCreateWithoutFollowingsInputObjectSchema as UserUncheckedCreateWithoutFollowingsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingsInput.schema';
import { UserCreateOrConnectWithoutFollowingsInputObjectSchema as UserCreateOrConnectWithoutFollowingsInputObjectSchema } from './UserCreateOrConnectWithoutFollowingsInput.schema';
import { UserUpsertWithoutFollowingsInputObjectSchema as UserUpsertWithoutFollowingsInputObjectSchema } from './UserUpsertWithoutFollowingsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFollowingsInputObjectSchema as UserUpdateToOneWithWhereWithoutFollowingsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFollowingsInput.schema';
import { UserUpdateWithoutFollowingsInputObjectSchema as UserUpdateWithoutFollowingsInputObjectSchema } from './UserUpdateWithoutFollowingsInput.schema';
import { UserUncheckedUpdateWithoutFollowingsInputObjectSchema as UserUncheckedUpdateWithoutFollowingsInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFollowingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFollowingsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFollowingsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFollowingsInputObjectSchema), z.lazy(() => UserUpdateWithoutFollowingsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowingsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFollowingsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowingsNestedInput>;
export const UserUpdateOneRequiredWithoutFollowingsNestedInputObjectZodSchema = makeSchema();
