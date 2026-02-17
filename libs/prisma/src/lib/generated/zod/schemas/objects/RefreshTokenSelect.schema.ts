import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  userId: z.boolean().optional(),
  tokenId: z.boolean().optional()
}).strict();
export const RefreshTokenSelectObjectSchema: z.ZodType<Prisma.RefreshTokenSelect> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenSelect>;
export const RefreshTokenSelectObjectZodSchema = makeSchema();
