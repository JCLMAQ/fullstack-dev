import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserFollowerLinkCreateManyFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateManyFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateManyFollowerInput>;
export const UserFollowerLinkCreateManyFollowerInputObjectZodSchema = makeSchema();
