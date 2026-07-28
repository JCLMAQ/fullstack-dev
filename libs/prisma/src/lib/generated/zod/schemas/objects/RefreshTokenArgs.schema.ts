import * as z from 'zod';
import { RefreshTokenSelectObjectSchema as RefreshTokenSelectObjectSchema } from './RefreshTokenSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RefreshTokenSelectObjectSchema).optional()
}).strict();
export const RefreshTokenArgsObjectSchema = makeSchema();
export const RefreshTokenArgsObjectZodSchema = makeSchema();
