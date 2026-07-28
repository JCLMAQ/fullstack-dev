import * as z from 'zod';
import { ProfileCountOutputTypeSelectObjectSchema as ProfileCountOutputTypeSelectObjectSchema } from './ProfileCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProfileCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProfileCountOutputTypeArgsObjectSchema = makeSchema();
export const ProfileCountOutputTypeArgsObjectZodSchema = makeSchema();
