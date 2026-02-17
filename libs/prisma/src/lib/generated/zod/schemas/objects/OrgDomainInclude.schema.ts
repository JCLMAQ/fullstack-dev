import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional()
}).strict();
export const OrgDomainIncludeObjectSchema: z.ZodType<Prisma.OrgDomainInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainInclude>;
export const OrgDomainIncludeObjectZodSchema = makeSchema();
