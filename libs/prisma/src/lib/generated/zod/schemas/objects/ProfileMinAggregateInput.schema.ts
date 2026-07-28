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
  orderProfile: z.literal(true).optional(),
  bio: z.literal(true).optional()
}).strict();
export const ProfileMinAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMinAggregateInputType>;
export const ProfileMinAggregateInputObjectZodSchema = makeSchema();
