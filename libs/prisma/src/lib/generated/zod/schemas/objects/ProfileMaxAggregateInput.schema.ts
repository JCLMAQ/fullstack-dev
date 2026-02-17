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
  orderProfile: z.literal(true).optional(),
  bio: z.literal(true).optional()
}).strict();
export const ProfileMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMaxAggregateInputType>;
export const ProfileMaxAggregateInputObjectZodSchema = makeSchema();
