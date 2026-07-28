import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutGroupsInputObjectSchema as UserUpdateWithoutGroupsInputObjectSchema } from './UserUpdateWithoutGroupsInput.schema';
import { UserUncheckedUpdateWithoutGroupsInputObjectSchema as UserUncheckedUpdateWithoutGroupsInputObjectSchema } from './UserUncheckedUpdateWithoutGroupsInput.schema';
import { UserCreateWithoutGroupsInputObjectSchema as UserCreateWithoutGroupsInputObjectSchema } from './UserCreateWithoutGroupsInput.schema';
import { UserUncheckedCreateWithoutGroupsInputObjectSchema as UserUncheckedCreateWithoutGroupsInputObjectSchema } from './UserUncheckedCreateWithoutGroupsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutGroupsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutGroupsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutGroupsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutGroupsInput>;
export const UserUpsertWithoutGroupsInputObjectZodSchema = makeSchema();
