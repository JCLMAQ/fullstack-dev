import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTodosAuthorInputObjectSchema as UserUpdateWithoutTodosAuthorInputObjectSchema } from './UserUpdateWithoutTodosAuthorInput.schema';
import { UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema as UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutTodosAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTodosAuthorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodosAuthorInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTodosAuthorInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTodosAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTodosAuthorInput>;
export const UserUpdateToOneWithWhereWithoutTodosAuthorInputObjectZodSchema = makeSchema();
