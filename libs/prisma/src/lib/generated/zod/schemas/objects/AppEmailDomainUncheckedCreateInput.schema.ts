import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  domain: z.string(),
  allowed: z.boolean()
}).strict();
export const AppEmailDomainUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AppEmailDomainUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainUncheckedCreateInput>;
export const AppEmailDomainUncheckedCreateInputObjectZodSchema = makeSchema();
