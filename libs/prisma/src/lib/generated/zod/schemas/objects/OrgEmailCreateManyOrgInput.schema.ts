import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  email: z.string(),
  description: z.string().optional().nullable()
}).strict();
export const OrgEmailCreateManyOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateManyOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateManyOrgInput>;
export const OrgEmailCreateManyOrgInputObjectZodSchema = makeSchema();
