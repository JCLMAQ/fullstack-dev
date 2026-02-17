import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  pwdHash: z.literal(true).optional(),
  salt: z.literal(true).optional(),
  isAdmin: z.literal(true).optional()
}).strict();
export const UserSecretMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserSecretMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretMaxAggregateInputType>;
export const UserSecretMaxAggregateInputObjectZodSchema = makeSchema();
