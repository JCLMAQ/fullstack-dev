import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  user_id: z.string(),
  follower_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserFollowerLinkCreateManyInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateManyInput>;
export const UserFollowerLinkCreateManyInputObjectZodSchema = makeSchema();
