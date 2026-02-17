import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  domainName: z.boolean().optional(),
  extension: z.boolean().optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  orgId: z.boolean().optional()
}).strict();
export const OrgDomainSelectObjectSchema: z.ZodType<Prisma.OrgDomainSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainSelect>;
export const OrgDomainSelectObjectZodSchema = makeSchema();
