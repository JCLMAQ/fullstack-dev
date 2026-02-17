import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  domainName: z.string(),
  extension: z.string()
}).strict();
export const OrgDomainCreateWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgDomainCreateWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainCreateWithoutOrgInput>;
export const OrgDomainCreateWithoutOrgInputObjectZodSchema = makeSchema();
