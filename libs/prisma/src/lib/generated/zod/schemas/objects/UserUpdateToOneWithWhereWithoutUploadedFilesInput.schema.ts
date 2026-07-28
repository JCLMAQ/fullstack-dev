import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUploadedFilesInputObjectSchema as UserUpdateWithoutUploadedFilesInputObjectSchema } from './UserUpdateWithoutUploadedFilesInput.schema';
import { UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema as UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema } from './UserUncheckedUpdateWithoutUploadedFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUploadedFilesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUploadedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUploadedFilesInput>;
export const UserUpdateToOneWithWhereWithoutUploadedFilesInputObjectZodSchema = makeSchema();
