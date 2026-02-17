import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tokenId: z.string()
}).strict();
export const RefreshTokenCreateInputObjectSchema: z.ZodType<Prisma.RefreshTokenCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenCreateInput>;
export const RefreshTokenCreateInputObjectZodSchema = makeSchema();
