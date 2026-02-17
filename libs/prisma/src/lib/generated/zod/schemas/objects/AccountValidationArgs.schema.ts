import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AccountValidationSelectObjectSchema as AccountValidationSelectObjectSchema } from './AccountValidationSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountValidationSelectObjectSchema).optional()
}).strict();
export const AccountValidationArgsObjectSchema = makeSchema();
export const AccountValidationArgsObjectZodSchema = makeSchema();
