import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutUploadedImagesInputObjectSchema as UserUpdateWithoutUploadedImagesInputObjectSchema } from './UserUpdateWithoutUploadedImagesInput.schema';
import { UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema as UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema } from './UserUncheckedUpdateWithoutUploadedImagesInput.schema';
import { UserCreateWithoutUploadedImagesInputObjectSchema as UserCreateWithoutUploadedImagesInputObjectSchema } from './UserCreateWithoutUploadedImagesInput.schema';
import { UserUncheckedCreateWithoutUploadedImagesInputObjectSchema as UserUncheckedCreateWithoutUploadedImagesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedImagesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedImagesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUploadedImagesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUploadedImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutUploadedImagesInput>;
export const UserUpsertWithoutUploadedImagesInputObjectZodSchema = makeSchema();
