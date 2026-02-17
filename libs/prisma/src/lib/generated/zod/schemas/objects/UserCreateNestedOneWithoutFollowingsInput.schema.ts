import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutFollowingsInputObjectSchema as UserCreateWithoutFollowingsInputObjectSchema } from './UserCreateWithoutFollowingsInput.schema';
import { UserUncheckedCreateWithoutFollowingsInputObjectSchema as UserUncheckedCreateWithoutFollowingsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingsInput.schema';
import { UserCreateOrConnectWithoutFollowingsInputObjectSchema as UserCreateOrConnectWithoutFollowingsInputObjectSchema } from './UserCreateOrConnectWithoutFollowingsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFollowingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFollowingsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFollowingsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFollowingsInput>;
export const UserCreateNestedOneWithoutFollowingsInputObjectZodSchema = makeSchema();
