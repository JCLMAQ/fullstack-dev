import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOwnedFilesInputObjectSchema as UserUpdateWithoutOwnedFilesInputObjectSchema } from './UserUpdateWithoutOwnedFilesInput.schema';
import { UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema as UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedFilesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOwnedFilesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedFilesInput>;
export const UserUpdateToOneWithWhereWithoutOwnedFilesInputObjectZodSchema = makeSchema();
