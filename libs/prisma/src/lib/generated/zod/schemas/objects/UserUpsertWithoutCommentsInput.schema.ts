import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutCommentsInputObjectSchema as UserUpdateWithoutCommentsInputObjectSchema } from './UserUpdateWithoutCommentsInput.schema';
import { UserUncheckedUpdateWithoutCommentsInputObjectSchema as UserUncheckedUpdateWithoutCommentsInputObjectSchema } from './UserUncheckedUpdateWithoutCommentsInput.schema';
import { UserCreateWithoutCommentsInputObjectSchema as UserCreateWithoutCommentsInputObjectSchema } from './UserCreateWithoutCommentsInput.schema';
import { UserUncheckedCreateWithoutCommentsInputObjectSchema as UserUncheckedCreateWithoutCommentsInputObjectSchema } from './UserUncheckedCreateWithoutCommentsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCommentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCommentsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCommentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCommentsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCommentsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutCommentsInput>;
export const UserUpsertWithoutCommentsInputObjectZodSchema = makeSchema();
