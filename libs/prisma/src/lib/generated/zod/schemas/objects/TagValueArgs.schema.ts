import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './TagValueSelect.schema';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './TagValueInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TagValueSelectObjectSchema).optional(),
  include: z.lazy(() => TagValueIncludeObjectSchema).optional()
}).strict();
export const TagValueArgsObjectSchema = makeSchema();
export const TagValueArgsObjectZodSchema = makeSchema();
