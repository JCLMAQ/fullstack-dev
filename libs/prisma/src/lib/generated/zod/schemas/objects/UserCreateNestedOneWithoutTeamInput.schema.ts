import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutTeamInputObjectSchema as UserCreateWithoutTeamInputObjectSchema } from './UserCreateWithoutTeamInput.schema';
import { UserUncheckedCreateWithoutTeamInputObjectSchema as UserUncheckedCreateWithoutTeamInputObjectSchema } from './UserUncheckedCreateWithoutTeamInput.schema';
import { UserCreateOrConnectWithoutTeamInputObjectSchema as UserCreateOrConnectWithoutTeamInputObjectSchema } from './UserCreateOrConnectWithoutTeamInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTeamInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTeamInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeamInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTeamInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTeamInput>;
export const UserCreateNestedOneWithoutTeamInputObjectZodSchema = makeSchema();
