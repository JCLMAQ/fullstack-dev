import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailCountOutputTypeSelectObjectSchema as OrgEmailCountOutputTypeSelectObjectSchema } from './OrgEmailCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrgEmailCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const OrgEmailCountOutputTypeArgsObjectSchema = makeSchema();
export const OrgEmailCountOutputTypeArgsObjectZodSchema = makeSchema();
