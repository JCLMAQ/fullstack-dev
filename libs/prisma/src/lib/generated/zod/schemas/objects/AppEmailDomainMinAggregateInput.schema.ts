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
  domain: z.literal(true).optional(),
  allowed: z.literal(true).optional()
}).strict();
export const AppEmailDomainMinAggregateInputObjectSchema: z.ZodType<Prisma.AppEmailDomainMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainMinAggregateInputType>;
export const AppEmailDomainMinAggregateInputObjectZodSchema = makeSchema();
