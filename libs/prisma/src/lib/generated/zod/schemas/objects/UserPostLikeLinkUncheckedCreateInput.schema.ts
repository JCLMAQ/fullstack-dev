import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.string(),
  post_id: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserPostLikeLinkUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUncheckedCreateInput>;
export const UserPostLikeLinkUncheckedCreateInputObjectZodSchema = makeSchema();
