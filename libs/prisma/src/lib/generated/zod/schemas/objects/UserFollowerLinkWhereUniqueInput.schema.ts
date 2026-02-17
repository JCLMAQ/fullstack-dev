import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkUser_idFollower_idCompoundUniqueInputObjectSchema as UserFollowerLinkUser_idFollower_idCompoundUniqueInputObjectSchema } from './UserFollowerLinkUser_idFollower_idCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  user_id_follower_id: z.lazy(() => UserFollowerLinkUser_idFollower_idCompoundUniqueInputObjectSchema).optional()
}).strict();
export const UserFollowerLinkWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkWhereUniqueInput>;
export const UserFollowerLinkWhereUniqueInputObjectZodSchema = makeSchema();
