import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUploadedImagesInputObjectSchema as UserCreateWithoutUploadedImagesInputObjectSchema } from './UserCreateWithoutUploadedImagesInput.schema';
import { UserUncheckedCreateWithoutUploadedImagesInputObjectSchema as UserUncheckedCreateWithoutUploadedImagesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedImagesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUploadedImagesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUploadedImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutUploadedImagesInput>;
export const UserCreateOrConnectWithoutUploadedImagesInputObjectZodSchema = makeSchema();
