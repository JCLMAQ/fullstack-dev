import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutFollowersInputObjectSchema as UserCreateNestedOneWithoutFollowersInputObjectSchema } from './UserCreateNestedOneWithoutFollowersInput.schema';
import { UserCreateNestedOneWithoutFollowingsInputObjectSchema as UserCreateNestedOneWithoutFollowingsInputObjectSchema } from './UserCreateNestedOneWithoutFollowingsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFollowersInputObjectSchema),
  follower: z.lazy(() => UserCreateNestedOneWithoutFollowingsInputObjectSchema)
}).strict();
export const UserFollowerLinkCreateInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateInput>;
export const UserFollowerLinkCreateInputObjectZodSchema = makeSchema();
