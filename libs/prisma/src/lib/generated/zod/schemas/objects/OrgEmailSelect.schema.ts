import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { OrgEmailUseToFindManySchema as OrgEmailUseToFindManySchema } from '../findManyOrgEmailUseTo.schema';
import { OrgEmailCountOutputTypeArgsObjectSchema as OrgEmailCountOutputTypeArgsObjectSchema } from './OrgEmailCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  email: z.boolean().optional(),
  description: z.boolean().optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  orgId: z.boolean().optional(),
  OrgEmailUseTos: z.union([z.boolean(), z.lazy(() => OrgEmailUseToFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrgEmailCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrgEmailSelectObjectSchema: z.ZodType<Prisma.OrgEmailSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailSelect>;
export const OrgEmailSelectObjectZodSchema = makeSchema();
