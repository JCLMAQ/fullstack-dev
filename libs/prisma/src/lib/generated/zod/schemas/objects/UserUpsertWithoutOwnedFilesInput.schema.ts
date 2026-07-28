import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutOwnedFilesInputObjectSchema as UserUpdateWithoutOwnedFilesInputObjectSchema } from './UserUpdateWithoutOwnedFilesInput.schema';
import { UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema as UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedFilesInput.schema';
import { UserCreateWithoutOwnedFilesInputObjectSchema as UserCreateWithoutOwnedFilesInputObjectSchema } from './UserCreateWithoutOwnedFilesInput.schema';
import { UserUncheckedCreateWithoutOwnedFilesInputObjectSchema as UserUncheckedCreateWithoutOwnedFilesInputObjectSchema } from './UserUncheckedCreateWithoutOwnedFilesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedFilesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOwnedFilesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOwnedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOwnedFilesInput>;
export const UserUpsertWithoutOwnedFilesInputObjectZodSchema = makeSchema();
