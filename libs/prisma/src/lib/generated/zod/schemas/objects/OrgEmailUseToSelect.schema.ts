import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailArgsObjectSchema as OrgEmailArgsObjectSchema } from './OrgEmailArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  useTo: z.boolean().optional(),
  isActiv: z.boolean().optional(),
  emailOrg: z.union([z.boolean(), z.lazy(() => OrgEmailArgsObjectSchema)]).optional(),
  emailOrgId: z.boolean().optional()
}).strict();
export const OrgEmailUseToSelectObjectSchema: z.ZodType<Prisma.OrgEmailUseToSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToSelect>;
export const OrgEmailUseToSelectObjectZodSchema = makeSchema();
