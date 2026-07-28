import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTeamInputObjectSchema as UserUpdateWithoutTeamInputObjectSchema } from './UserUpdateWithoutTeamInput.schema';
import { UserUncheckedUpdateWithoutTeamInputObjectSchema as UserUncheckedUpdateWithoutTeamInputObjectSchema } from './UserUncheckedUpdateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTeamInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTeamInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTeamInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTeamInput>;
export const UserUpdateToOneWithWhereWithoutTeamInputObjectZodSchema = makeSchema();
