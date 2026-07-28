import * as z from 'zod';
import { FileCountOutputTypeSelectObjectSchema as FileCountOutputTypeSelectObjectSchema } from './FileCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FileCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const FileCountOutputTypeArgsObjectSchema = makeSchema();
export const FileCountOutputTypeArgsObjectZodSchema = makeSchema();
