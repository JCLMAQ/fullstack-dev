import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutTeamInputObjectSchema as UserCreateWithoutTeamInputObjectSchema } from './UserCreateWithoutTeamInput.schema';
import { UserUncheckedCreateWithoutTeamInputObjectSchema as UserUncheckedCreateWithoutTeamInputObjectSchema } from './UserUncheckedCreateWithoutTeamInput.schema';
import { UserCreateOrConnectWithoutTeamInputObjectSchema as UserCreateOrConnectWithoutTeamInputObjectSchema } from './UserCreateOrConnectWithoutTeamInput.schema';
import { UserUpsertWithoutTeamInputObjectSchema as UserUpsertWithoutTeamInputObjectSchema } from './UserUpsertWithoutTeamInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTeamInputObjectSchema as UserUpdateToOneWithWhereWithoutTeamInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTeamInput.schema';
import { UserUpdateWithoutTeamInputObjectSchema as UserUpdateWithoutTeamInputObjectSchema } from './UserUpdateWithoutTeamInput.schema';
import { UserUncheckedUpdateWithoutTeamInputObjectSchema as UserUncheckedUpdateWithoutTeamInputObjectSchema } from './UserUncheckedUpdateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTeamInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTeamInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeamInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTeamInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTeamInputObjectSchema), z.lazy(() => UserUpdateWithoutTeamInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTeamInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutTeamNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutTeamNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutTeamNestedInput>;
export const UserUpdateOneWithoutTeamNestedInputObjectZodSchema = makeSchema();
