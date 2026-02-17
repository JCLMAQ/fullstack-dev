import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCountOutputTypeSelectObjectSchema as TagValueCountOutputTypeSelectObjectSchema } from './TagValueCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TagValueCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TagValueCountOutputTypeArgsObjectSchema = makeSchema();
export const TagValueCountOutputTypeArgsObjectZodSchema = makeSchema();
