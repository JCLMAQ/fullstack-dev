import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFollowersInputObjectSchema as UserUpdateWithoutFollowersInputObjectSchema } from './UserUpdateWithoutFollowersInput.schema';
import { UserUncheckedUpdateWithoutFollowersInputObjectSchema as UserUncheckedUpdateWithoutFollowersInputObjectSchema } from './UserUncheckedUpdateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFollowersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFollowersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowersInput>;
export const UserUpdateToOneWithWhereWithoutFollowersInputObjectZodSchema = makeSchema();
