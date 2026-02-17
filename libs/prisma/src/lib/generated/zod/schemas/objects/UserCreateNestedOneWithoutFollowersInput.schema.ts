import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutFollowersInputObjectSchema as UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema as UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema';
import { UserCreateOrConnectWithoutFollowersInputObjectSchema as UserCreateOrConnectWithoutFollowersInputObjectSchema } from './UserCreateOrConnectWithoutFollowersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFollowersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFollowersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFollowersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFollowersInput>;
export const UserCreateNestedOneWithoutFollowersInputObjectZodSchema = makeSchema();
