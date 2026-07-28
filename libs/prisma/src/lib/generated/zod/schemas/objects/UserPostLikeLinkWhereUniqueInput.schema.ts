import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserPostLikeLinkUser_idPost_idCompoundUniqueInputObjectSchema as UserPostLikeLinkUser_idPost_idCompoundUniqueInputObjectSchema } from './UserPostLikeLinkUser_idPost_idCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  user_id_post_id: z.lazy(() => UserPostLikeLinkUser_idPost_idCompoundUniqueInputObjectSchema).optional()
}).strict();
export const UserPostLikeLinkWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkWhereUniqueInput>;
export const UserPostLikeLinkWhereUniqueInputObjectZodSchema = makeSchema();
