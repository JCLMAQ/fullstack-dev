import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFollowingsInputObjectSchema as UserUpdateWithoutFollowingsInputObjectSchema } from './UserUpdateWithoutFollowingsInput.schema';
import { UserUncheckedUpdateWithoutFollowingsInputObjectSchema as UserUncheckedUpdateWithoutFollowingsInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFollowingsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowingsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFollowingsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowingsInput>;
export const UserUpdateToOneWithWhereWithoutFollowingsInputObjectZodSchema = makeSchema();
