import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  domainName: z.string(),
  extension: z.string()
}).strict();
export const OrgDomainUncheckedCreateWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgDomainUncheckedCreateWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainUncheckedCreateWithoutOrgInput>;
export const OrgDomainUncheckedCreateWithoutOrgInputObjectZodSchema = makeSchema();
