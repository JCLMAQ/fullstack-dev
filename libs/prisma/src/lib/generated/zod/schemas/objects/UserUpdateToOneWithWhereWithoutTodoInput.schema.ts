import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTodoInputObjectSchema as UserUpdateWithoutTodoInputObjectSchema } from './UserUpdateWithoutTodoInput.schema';
import { UserUncheckedUpdateWithoutTodoInputObjectSchema as UserUncheckedUpdateWithoutTodoInputObjectSchema } from './UserUncheckedUpdateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTodoInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodoInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTodoInput>;
export const UserUpdateToOneWithWhereWithoutTodoInputObjectZodSchema = makeSchema();
