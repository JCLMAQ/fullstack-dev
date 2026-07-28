import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { OrgEmailUseToFindManySchema as OrgEmailUseToFindManySchema } from '../findManyOrgEmailUseTo.schema';
import { OrgEmailCountOutputTypeArgsObjectSchema as OrgEmailCountOutputTypeArgsObjectSchema } from './OrgEmailCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  OrgEmailUseTos: z.union([z.boolean(), z.lazy(() => OrgEmailUseToFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrgEmailCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrgEmailIncludeObjectSchema: z.ZodType<Prisma.OrgEmailInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailInclude>;
export const OrgEmailIncludeObjectZodSchema = makeSchema();
