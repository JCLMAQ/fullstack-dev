import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutTasksAuthorInputObjectSchema as UserUpdateWithoutTasksAuthorInputObjectSchema } from './UserUpdateWithoutTasksAuthorInput.schema';
import { UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema as UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutTasksAuthorInput.schema';
import { UserCreateWithoutTasksAuthorInputObjectSchema as UserCreateWithoutTasksAuthorInputObjectSchema } from './UserCreateWithoutTasksAuthorInput.schema';
import { UserUncheckedCreateWithoutTasksAuthorInputObjectSchema as UserUncheckedCreateWithoutTasksAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTasksAuthorInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksAuthorInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTasksAuthorInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTasksAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTasksAuthorInput>;
export const UserUpsertWithoutTasksAuthorInputObjectZodSchema = makeSchema();
