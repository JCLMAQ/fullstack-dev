import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  user_id: z.string(),
  follower_id: z.string()
}).strict();
export const UserFollowerLinkUser_idFollower_idCompoundUniqueInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUser_idFollower_idCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUser_idFollower_idCompoundUniqueInput>;
export const UserFollowerLinkUser_idFollower_idCompoundUniqueInputObjectZodSchema = makeSchema();
