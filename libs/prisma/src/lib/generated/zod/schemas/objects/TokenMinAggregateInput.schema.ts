import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  tokenId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  emailToken: z.literal(true).optional(),
  valid: z.literal(true).optional(),
  expiration: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const TokenMinAggregateInputObjectSchema: z.ZodType<Prisma.TokenMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TokenMinAggregateInputType>;
export const TokenMinAggregateInputObjectZodSchema = makeSchema();
