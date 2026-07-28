import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTeamInputObjectSchema as UserCreateWithoutTeamInputObjectSchema } from './UserCreateWithoutTeamInput.schema';
import { UserUncheckedCreateWithoutTeamInputObjectSchema as UserUncheckedCreateWithoutTeamInputObjectSchema } from './UserUncheckedCreateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTeamInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTeamInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTeamInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTeamInput>;
export const UserCreateOrConnectWithoutTeamInputObjectZodSchema = makeSchema();
