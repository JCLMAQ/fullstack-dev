import * as z from 'zod';
export const OrgDomainFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  domainName: z.string(),
  extension: z.string(),
  org: z.unknown().optional(),
  orgId: z.string()
}));