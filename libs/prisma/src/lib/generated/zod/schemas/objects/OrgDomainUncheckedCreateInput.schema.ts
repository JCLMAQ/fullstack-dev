import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  domainName: z.string(),
  extension: z.string(),
  orgId: z.string()
}).strict();
export const OrgDomainUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrgDomainUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainUncheckedCreateInput>;
export const OrgDomainUncheckedCreateInputObjectZodSchema = makeSchema();
