import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  follower_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserFollowerLinkCreateManyUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateManyUserInput>;
export const UserFollowerLinkCreateManyUserInputObjectZodSchema = makeSchema();
