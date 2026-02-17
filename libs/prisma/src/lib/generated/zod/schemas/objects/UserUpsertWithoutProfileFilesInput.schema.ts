import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutProfileFilesInputObjectSchema as UserUpdateWithoutProfileFilesInputObjectSchema } from './UserUpdateWithoutProfileFilesInput.schema';
import { UserUncheckedUpdateWithoutProfileFilesInputObjectSchema as UserUncheckedUpdateWithoutProfileFilesInputObjectSchema } from './UserUncheckedUpdateWithoutProfileFilesInput.schema';
import { UserCreateWithoutProfileFilesInputObjectSchema as UserCreateWithoutProfileFilesInputObjectSchema } from './UserCreateWithoutProfileFilesInput.schema';
import { UserUncheckedCreateWithoutProfileFilesInputObjectSchema as UserUncheckedCreateWithoutProfileFilesInputObjectSchema } from './UserUncheckedCreateWithoutProfileFilesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileFilesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutProfileFilesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutProfileFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutProfileFilesInput>;
export const UserUpsertWithoutProfileFilesInputObjectZodSchema = makeSchema();
