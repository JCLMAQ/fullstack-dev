import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutUploadedFilesInputObjectSchema as UserCreateWithoutUploadedFilesInputObjectSchema } from './UserCreateWithoutUploadedFilesInput.schema';
import { UserUncheckedCreateWithoutUploadedFilesInputObjectSchema as UserUncheckedCreateWithoutUploadedFilesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedFilesInput.schema';
import { UserCreateOrConnectWithoutUploadedFilesInputObjectSchema as UserCreateOrConnectWithoutUploadedFilesInputObjectSchema } from './UserCreateOrConnectWithoutUploadedFilesInput.schema';
import { UserUpsertWithoutUploadedFilesInputObjectSchema as UserUpsertWithoutUploadedFilesInputObjectSchema } from './UserUpsertWithoutUploadedFilesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUploadedFilesInputObjectSchema as UserUpdateToOneWithWhereWithoutUploadedFilesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUploadedFilesInput.schema';
import { UserUpdateWithoutUploadedFilesInputObjectSchema as UserUpdateWithoutUploadedFilesInputObjectSchema } from './UserUpdateWithoutUploadedFilesInput.schema';
import { UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema as UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema } from './UserUncheckedUpdateWithoutUploadedFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUploadedFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUploadedFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUpdateWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadedFilesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUploadedFilesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUploadedFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutUploadedFilesNestedInput>;
export const UserUpdateOneWithoutUploadedFilesNestedInputObjectZodSchema = makeSchema();
