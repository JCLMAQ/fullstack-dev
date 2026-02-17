import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutUploadedImagesInputObjectSchema as UserCreateWithoutUploadedImagesInputObjectSchema } from './UserCreateWithoutUploadedImagesInput.schema';
import { UserUncheckedCreateWithoutUploadedImagesInputObjectSchema as UserUncheckedCreateWithoutUploadedImagesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedImagesInput.schema';
import { UserCreateOrConnectWithoutUploadedImagesInputObjectSchema as UserCreateOrConnectWithoutUploadedImagesInputObjectSchema } from './UserCreateOrConnectWithoutUploadedImagesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUploadedImagesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUploadedImagesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUploadedImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutUploadedImagesInput>;
export const UserCreateNestedOneWithoutUploadedImagesInputObjectZodSchema = makeSchema();
