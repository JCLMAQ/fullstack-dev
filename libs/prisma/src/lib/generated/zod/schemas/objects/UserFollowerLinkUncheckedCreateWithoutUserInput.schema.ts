import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  follower_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUncheckedCreateWithoutUserInput>;
export const UserFollowerLinkUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
