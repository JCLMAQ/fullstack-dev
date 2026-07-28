import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFollowersInputObjectSchema as UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema as UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFollowersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFollowersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFollowersInput>;
export const UserCreateOrConnectWithoutFollowersInputObjectZodSchema = makeSchema();
