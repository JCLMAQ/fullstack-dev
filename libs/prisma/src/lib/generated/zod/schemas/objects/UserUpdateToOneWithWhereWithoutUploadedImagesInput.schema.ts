import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUploadedImagesInputObjectSchema as UserUpdateWithoutUploadedImagesInputObjectSchema } from './UserUpdateWithoutUploadedImagesInput.schema';
import { UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema as UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema } from './UserUncheckedUpdateWithoutUploadedImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUploadedImagesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUploadedImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUploadedImagesInput>;
export const UserUpdateToOneWithWhereWithoutUploadedImagesInputObjectZodSchema = makeSchema();
