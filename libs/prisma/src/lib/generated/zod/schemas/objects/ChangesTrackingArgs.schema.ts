import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './ChangesTrackingSelect.schema';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './ChangesTrackingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChangesTrackingSelectObjectSchema).optional(),
  include: z.lazy(() => ChangesTrackingIncludeObjectSchema).optional()
}).strict();
export const ChangesTrackingArgsObjectSchema = makeSchema();
export const ChangesTrackingArgsObjectZodSchema = makeSchema();
