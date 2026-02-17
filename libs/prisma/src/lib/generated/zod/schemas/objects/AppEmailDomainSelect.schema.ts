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
  domain: z.boolean().optional(),
  allowed: z.boolean().optional()
}).strict();
export const AppEmailDomainSelectObjectSchema: z.ZodType<Prisma.AppEmailDomainSelect> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainSelect>;
export const AppEmailDomainSelectObjectZodSchema = makeSchema();
