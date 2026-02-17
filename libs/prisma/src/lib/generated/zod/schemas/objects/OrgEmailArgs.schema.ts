import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './OrgEmailSelect.schema';
import { OrgEmailIncludeObjectSchema as OrgEmailIncludeObjectSchema } from './OrgEmailInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrgEmailSelectObjectSchema).optional(),
  include: z.lazy(() => OrgEmailIncludeObjectSchema).optional()
}).strict();
export const OrgEmailArgsObjectSchema = makeSchema();
export const OrgEmailArgsObjectZodSchema = makeSchema();
