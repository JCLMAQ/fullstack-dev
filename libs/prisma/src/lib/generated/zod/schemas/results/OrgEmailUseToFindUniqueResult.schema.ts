import * as z from 'zod';
export const OrgEmailUseToFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  useTo: z.string(),
  isActiv: z.boolean(),
  emailOrg: z.unknown().optional(),
  emailOrgId: z.number().int()
}));