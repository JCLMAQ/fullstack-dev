import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './OrgDomainSelect.schema';
import { OrgDomainIncludeObjectSchema as OrgDomainIncludeObjectSchema } from './OrgDomainInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrgDomainSelectObjectSchema).optional(),
  include: z.lazy(() => OrgDomainIncludeObjectSchema).optional()
}).strict();
export const OrgDomainArgsObjectSchema = makeSchema();
export const OrgDomainArgsObjectZodSchema = makeSchema();
