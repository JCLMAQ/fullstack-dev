import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutTeamInputObjectSchema as UserUpdateWithoutTeamInputObjectSchema } from './UserUpdateWithoutTeamInput.schema';
import { UserUncheckedUpdateWithoutTeamInputObjectSchema as UserUncheckedUpdateWithoutTeamInputObjectSchema } from './UserUncheckedUpdateWithoutTeamInput.schema';
import { UserCreateWithoutTeamInputObjectSchema as UserCreateWithoutTeamInputObjectSchema } from './UserCreateWithoutTeamInput.schema';
import { UserUncheckedCreateWithoutTeamInputObjectSchema as UserUncheckedCreateWithoutTeamInputObjectSchema } from './UserUncheckedCreateWithoutTeamInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTeamInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTeamInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTeamInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTeamInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTeamInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTeamInput>;
export const UserUpsertWithoutTeamInputObjectZodSchema = makeSchema();
