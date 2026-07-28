import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './PhoneSelect.schema';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './PhoneInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PhoneSelectObjectSchema).optional(),
  include: z.lazy(() => PhoneIncludeObjectSchema).optional()
}).strict();
export const PhoneArgsObjectSchema = makeSchema();
export const PhoneArgsObjectZodSchema = makeSchema();
