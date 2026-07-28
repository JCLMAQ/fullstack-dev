import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  pwdHash: z.literal(true).optional(),
  salt: z.literal(true).optional(),
  isAdmin: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserSecretCountAggregateInputObjectSchema: z.ZodType<Prisma.UserSecretCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretCountAggregateInputType>;
export const UserSecretCountAggregateInputObjectZodSchema = makeSchema();
