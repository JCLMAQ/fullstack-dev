import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUncheckedCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUncheckedCreateWithoutPostInput>;
export const UserPostLikeLinkUncheckedCreateWithoutPostInputObjectZodSchema = makeSchema();
