import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutGroupsInputObjectSchema as UserUpdateWithoutGroupsInputObjectSchema } from './UserUpdateWithoutGroupsInput.schema';
import { UserUncheckedUpdateWithoutGroupsInputObjectSchema as UserUncheckedUpdateWithoutGroupsInputObjectSchema } from './UserUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutGroupsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutGroupsInput>;
export const UserUpdateToOneWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();
