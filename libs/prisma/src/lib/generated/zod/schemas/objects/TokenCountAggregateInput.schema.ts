import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


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
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TokenCountAggregateInputObjectSchema: z.ZodType<Prisma.TokenCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TokenCountAggregateInputType>;
export const TokenCountAggregateInputObjectZodSchema = makeSchema();
