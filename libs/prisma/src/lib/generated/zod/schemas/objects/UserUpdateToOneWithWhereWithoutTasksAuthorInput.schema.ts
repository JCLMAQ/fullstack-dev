import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTasksAuthorInputObjectSchema as UserUpdateWithoutTasksAuthorInputObjectSchema } from './UserUpdateWithoutTasksAuthorInput.schema';
import { UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema as UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutTasksAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTasksAuthorInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTasksAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTasksAuthorInput>;
export const UserUpdateToOneWithWhereWithoutTasksAuthorInputObjectZodSchema = makeSchema();
