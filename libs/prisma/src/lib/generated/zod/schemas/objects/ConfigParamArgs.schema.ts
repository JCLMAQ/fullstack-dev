import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './ConfigParamSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConfigParamSelectObjectSchema).optional()
}).strict();
export const ConfigParamArgsObjectSchema = makeSchema();
export const ConfigParamArgsObjectZodSchema = makeSchema();
