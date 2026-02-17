import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tokenId: z.string()
}).strict();
export const RefreshTokenUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RefreshTokenUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenUncheckedCreateInput>;
export const RefreshTokenUncheckedCreateInputObjectZodSchema = makeSchema();
