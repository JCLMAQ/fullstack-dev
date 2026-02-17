import * as z from 'zod';
export const OrgEmailUseToFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  useTo: z.string(),
  isActiv: z.boolean(),
  emailOrg: z.unknown(),
  emailOrgId: z.number().int()
}));