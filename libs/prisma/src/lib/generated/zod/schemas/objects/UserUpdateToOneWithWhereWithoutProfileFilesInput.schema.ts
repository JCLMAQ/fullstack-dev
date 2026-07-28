import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutProfileFilesInputObjectSchema as UserUpdateWithoutProfileFilesInputObjectSchema } from './UserUpdateWithoutProfileFilesInput.schema';
import { UserUncheckedUpdateWithoutProfileFilesInputObjectSchema as UserUncheckedUpdateWithoutProfileFilesInputObjectSchema } from './UserUncheckedUpdateWithoutProfileFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileFilesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutProfileFilesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProfileFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProfileFilesInput>;
export const UserUpdateToOneWithWhereWithoutProfileFilesInputObjectZodSchema = makeSchema();
