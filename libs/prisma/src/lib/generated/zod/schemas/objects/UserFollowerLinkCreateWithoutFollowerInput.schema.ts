import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutFollowersInputObjectSchema as UserCreateNestedOneWithoutFollowersInputObjectSchema } from './UserCreateNestedOneWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFollowersInputObjectSchema)
}).strict();
export const UserFollowerLinkCreateWithoutFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateWithoutFollowerInput>;
export const UserFollowerLinkCreateWithoutFollowerInputObjectZodSchema = makeSchema();
