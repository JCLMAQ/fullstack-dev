import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  post_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserPostLikeLinkCreateManyUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateManyUserInput>;
export const UserPostLikeLinkCreateManyUserInputObjectZodSchema = makeSchema();
