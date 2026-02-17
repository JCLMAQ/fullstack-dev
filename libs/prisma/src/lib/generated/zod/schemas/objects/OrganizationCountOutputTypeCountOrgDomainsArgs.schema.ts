import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgDomainWhereInputObjectSchema as OrgDomainWhereInputObjectSchema } from './OrgDomainWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgDomainWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountOrgDomainsArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountOrgDomainsArgsObjectZodSchema = makeSchema();
