import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutOwnedFilesInputObjectSchema as UserCreateWithoutOwnedFilesInputObjectSchema } from './UserCreateWithoutOwnedFilesInput.schema';
import { UserUncheckedCreateWithoutOwnedFilesInputObjectSchema as UserUncheckedCreateWithoutOwnedFilesInputObjectSchema } from './UserUncheckedCreateWithoutOwnedFilesInput.schema';
import { UserCreateOrConnectWithoutOwnedFilesInputObjectSchema as UserCreateOrConnectWithoutOwnedFilesInputObjectSchema } from './UserCreateOrConnectWithoutOwnedFilesInput.schema';
import { UserUpsertWithoutOwnedFilesInputObjectSchema as UserUpsertWithoutOwnedFilesInputObjectSchema } from './UserUpsertWithoutOwnedFilesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOwnedFilesInputObjectSchema as UserUpdateToOneWithWhereWithoutOwnedFilesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOwnedFilesInput.schema';
import { UserUpdateWithoutOwnedFilesInputObjectSchema as UserUpdateWithoutOwnedFilesInputObjectSchema } from './UserUpdateWithoutOwnedFilesInput.schema';
import { UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema as UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOwnedFilesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUpdateWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutOwnedFilesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedFilesNestedInput>;
export const UserUpdateOneRequiredWithoutOwnedFilesNestedInputObjectZodSchema = makeSchema();
