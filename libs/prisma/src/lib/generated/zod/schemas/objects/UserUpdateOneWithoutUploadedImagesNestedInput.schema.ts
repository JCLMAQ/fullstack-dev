import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutUploadedImagesInputObjectSchema as UserCreateWithoutUploadedImagesInputObjectSchema } from './UserCreateWithoutUploadedImagesInput.schema';
import { UserUncheckedCreateWithoutUploadedImagesInputObjectSchema as UserUncheckedCreateWithoutUploadedImagesInputObjectSchema } from './UserUncheckedCreateWithoutUploadedImagesInput.schema';
import { UserCreateOrConnectWithoutUploadedImagesInputObjectSchema as UserCreateOrConnectWithoutUploadedImagesInputObjectSchema } from './UserCreateOrConnectWithoutUploadedImagesInput.schema';
import { UserUpsertWithoutUploadedImagesInputObjectSchema as UserUpsertWithoutUploadedImagesInputObjectSchema } from './UserUpsertWithoutUploadedImagesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUploadedImagesInputObjectSchema as UserUpdateToOneWithWhereWithoutUploadedImagesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUploadedImagesInput.schema';
import { UserUpdateWithoutUploadedImagesInputObjectSchema as UserUpdateWithoutUploadedImagesInputObjectSchema } from './UserUpdateWithoutUploadedImagesInput.schema';
import { UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema as UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema } from './UserUncheckedUpdateWithoutUploadedImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadedImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUploadedImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUploadedImagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUpdateWithoutUploadedImagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadedImagesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUploadedImagesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUploadedImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutUploadedImagesNestedInput>;
export const UserUpdateOneWithoutUploadedImagesNestedInputObjectZodSchema = makeSchema();
