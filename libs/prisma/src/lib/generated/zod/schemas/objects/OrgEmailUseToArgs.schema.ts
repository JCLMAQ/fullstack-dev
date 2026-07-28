import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './OrgEmailUseToSelect.schema';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './OrgEmailUseToInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrgEmailUseToSelectObjectSchema).optional(),
  include: z.lazy(() => OrgEmailUseToIncludeObjectSchema).optional()
}).strict();
export const OrgEmailUseToArgsObjectSchema = makeSchema();
export const OrgEmailUseToArgsObjectZodSchema = makeSchema();
