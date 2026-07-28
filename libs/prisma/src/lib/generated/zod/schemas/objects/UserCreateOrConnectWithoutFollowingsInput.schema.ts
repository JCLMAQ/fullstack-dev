import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFollowingsInputObjectSchema as UserCreateWithoutFollowingsInputObjectSchema } from './UserCreateWithoutFollowingsInput.schema';
import { UserUncheckedCreateWithoutFollowingsInputObjectSchema as UserUncheckedCreateWithoutFollowingsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFollowingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFollowingsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFollowingsInput>;
export const UserCreateOrConnectWithoutFollowingsInputObjectZodSchema = makeSchema();
