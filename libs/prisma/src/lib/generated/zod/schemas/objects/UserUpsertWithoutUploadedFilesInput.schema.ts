import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutUploadedFilesInputObjectSchema as UserUpdateWithoutUploadedFilesInputObjectSchema } from './UserUpdateWithoutUploadedFilesInput.schema';
import { UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema as UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema } from './UserUncheckedUpdateWithoutUploadedFilesInput.schema';
import { UserCreateWithoutUploadedFilesInputObjectSchema as UserCreateWithoutUploadedFilesInputObjectSchema } from './UserCreateWithoutUploadedFilesInput.schema';
import { UserUncheckedCreateWithoutUploadedFilesInputObjectSchema as UserUncheckedCreateWithoutUploadedFilesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedFilesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedFilesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUploadedFilesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUploadedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutUploadedFilesInput>;
export const UserUpsertWithoutUploadedFilesInputObjectZodSchema = makeSchema();
