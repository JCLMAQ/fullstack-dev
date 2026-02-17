import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.string(),
  follower_id: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserFollowerLinkUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUncheckedCreateInput>;
export const UserFollowerLinkUncheckedCreateInputObjectZodSchema = makeSchema();
