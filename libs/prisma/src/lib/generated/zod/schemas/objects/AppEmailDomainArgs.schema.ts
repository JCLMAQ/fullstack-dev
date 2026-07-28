import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './AppEmailDomainSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AppEmailDomainSelectObjectSchema).optional()
}).strict();
export const AppEmailDomainArgsObjectSchema = makeSchema();
export const AppEmailDomainArgsObjectZodSchema = makeSchema();
