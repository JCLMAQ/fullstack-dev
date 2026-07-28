import * as z from 'zod';
import { GroupSelectObjectSchema as GroupSelectObjectSchema } from './GroupSelect.schema';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './GroupInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GroupSelectObjectSchema).optional(),
  include: z.lazy(() => GroupIncludeObjectSchema).optional()
}).strict();
export const GroupArgsObjectSchema = makeSchema();
export const GroupArgsObjectZodSchema = makeSchema();
