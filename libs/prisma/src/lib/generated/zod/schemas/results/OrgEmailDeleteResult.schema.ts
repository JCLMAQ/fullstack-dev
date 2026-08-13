import * as z from 'zod';
export const OrgEmailDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  email: z.string(),
  description: z.string().nullable().optional(),
  org: z.unknown().optional(),
  orgId: z.string(),
  OrgEmailUseTos: z.array(z.unknown()).optional()
}));