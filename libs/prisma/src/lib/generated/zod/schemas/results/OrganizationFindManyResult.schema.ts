import * as z from 'zod';
export const OrganizationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().nullable().optional(),
  isPublic: z.boolean().nullable().optional(),
  isDeleted: z.number().int().nullable().optional(),
  isDeletedDT: z.date().nullable().optional(),
  name: z.string(),
  description: z.string().nullable().optional(),
  address: z.unknown().nullable().optional(),
  emailITAdmin: z.string(),
  webSite: z.string().nullable().optional(),
  OrgEmails: z.array(z.unknown()).optional(),
  OrgDomains: z.array(z.unknown()).optional(),
  mainOrg: z.unknown().optional(),
  mainOrgId: z.string().nullable().optional(),
  OrgEntity: z.array(z.unknown()).optional(),
  Members: z.array(z.unknown()).optional(),
  Posts: z.array(z.unknown()).optional(),
  Groups: z.array(z.unknown()).optional(),
  Files: z.array(z.unknown()).optional(),
  Tasks: z.array(z.unknown()).optional(),
  Todos: z.array(z.unknown()).optional(),
  Images: z.array(z.unknown()).optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});