import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutFollowingsInputObjectSchema as UserCreateNestedOneWithoutFollowingsInputObjectSchema } from './UserCreateNestedOneWithoutFollowingsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  follower: z.lazy(() => UserCreateNestedOneWithoutFollowingsInputObjectSchema)
}).strict();
export const UserFollowerLinkCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateWithoutUserInput>;
export const UserFollowerLinkCreateWithoutUserInputObjectZodSchema = makeSchema();
