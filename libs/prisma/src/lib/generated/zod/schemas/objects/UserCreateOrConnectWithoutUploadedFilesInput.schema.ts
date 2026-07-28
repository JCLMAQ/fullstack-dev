import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUploadedFilesInputObjectSchema as UserCreateWithoutUploadedFilesInputObjectSchema } from './UserCreateWithoutUploadedFilesInput.schema';
import { UserUncheckedCreateWithoutUploadedFilesInputObjectSchema as UserUncheckedCreateWithoutUploadedFilesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUploadedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedFilesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUploadedFilesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUploadedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutUploadedFilesInput>;
export const UserCreateOrConnectWithoutUploadedFilesInputObjectZodSchema = makeSchema();
