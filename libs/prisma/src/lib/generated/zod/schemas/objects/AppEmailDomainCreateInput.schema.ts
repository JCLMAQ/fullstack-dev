import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  domain: z.string(),
  allowed: z.boolean()
}).strict();
export const AppEmailDomainCreateInputObjectSchema: z.ZodType<Prisma.AppEmailDomainCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainCreateInput>;
export const AppEmailDomainCreateInputObjectZodSchema = makeSchema();
