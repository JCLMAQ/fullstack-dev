import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateNestedOneWithoutOrgDomainsInputObjectSchema as OrganizationCreateNestedOneWithoutOrgDomainsInputObjectSchema } from './OrganizationCreateNestedOneWithoutOrgDomainsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  domainName: z.string(),
  extension: z.string(),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutOrgDomainsInputObjectSchema).optional()
}).strict();
export const OrgDomainCreateInputObjectSchema: z.ZodType<Prisma.OrgDomainCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainCreateInput>;
export const OrgDomainCreateInputObjectZodSchema = makeSchema();
