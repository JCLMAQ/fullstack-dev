import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutUploadedFilesInputObjectSchema as UserCreateWithoutUploadedFilesInputObjectSchema } from './UserCreateWithoutUploadedFilesInput.schema';
import { UserUncheckedCreateWithoutUploadedFilesInputObjectSchema as UserUncheckedCreateWithoutUploadedFilesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedFilesInput.schema';
import { UserCreateOrConnectWithoutUploadedFilesInputObjectSchema as UserCreateOrConnectWithoutUploadedFilesInputObjectSchema } from './UserCreateOrConnectWithoutUploadedFilesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUploadedFilesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUploadedFilesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUploadedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutUploadedFilesInput>;
export const UserCreateNestedOneWithoutUploadedFilesInputObjectZodSchema = makeSchema();
