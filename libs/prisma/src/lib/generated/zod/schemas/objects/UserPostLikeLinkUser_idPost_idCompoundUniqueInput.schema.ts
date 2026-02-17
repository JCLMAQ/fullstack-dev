import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.string(),
  post_id: z.string()
}).strict();
export const UserPostLikeLinkUser_idPost_idCompoundUniqueInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUser_idPost_idCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUser_idPost_idCompoundUniqueInput>;
export const UserPostLikeLinkUser_idPost_idCompoundUniqueInputObjectZodSchema = makeSchema();
