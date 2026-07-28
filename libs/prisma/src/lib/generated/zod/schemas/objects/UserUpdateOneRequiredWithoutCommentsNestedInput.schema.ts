import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutCommentsInputObjectSchema as UserCreateWithoutCommentsInputObjectSchema } from './UserCreateWithoutCommentsInput.schema';
import { UserUncheckedCreateWithoutCommentsInputObjectSchema as UserUncheckedCreateWithoutCommentsInputObjectSchema } from './UserUncheckedCreateWithoutCommentsInput.schema';
import { UserCreateOrConnectWithoutCommentsInputObjectSchema as UserCreateOrConnectWithoutCommentsInputObjectSchema } from './UserCreateOrConnectWithoutCommentsInput.schema';
import { UserUpsertWithoutCommentsInputObjectSchema as UserUpsertWithoutCommentsInputObjectSchema } from './UserUpsertWithoutCommentsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCommentsInputObjectSchema as UserUpdateToOneWithWhereWithoutCommentsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCommentsInput.schema';
import { UserUpdateWithoutCommentsInputObjectSchema as UserUpdateWithoutCommentsInputObjectSchema } from './UserUpdateWithoutCommentsInput.schema';
import { UserUncheckedUpdateWithoutCommentsInputObjectSchema as UserUncheckedUpdateWithoutCommentsInputObjectSchema } from './UserUncheckedUpdateWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCommentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCommentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCommentsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCommentsInputObjectSchema), z.lazy(() => UserUpdateWithoutCommentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCommentsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput>;
export const UserUpdateOneRequiredWithoutCommentsNestedInputObjectZodSchema = makeSchema();
