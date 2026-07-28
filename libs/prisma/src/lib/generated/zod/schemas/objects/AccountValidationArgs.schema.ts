import * as z from 'zod';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './AccountValidationSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountValidationSelectObjectSchema).optional()
}).strict();
export const AccountValidationArgsObjectSchema = makeSchema();
export const AccountValidationArgsObjectZodSchema = makeSchema();
