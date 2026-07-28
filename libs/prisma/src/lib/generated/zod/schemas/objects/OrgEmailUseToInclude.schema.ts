import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailArgsObjectSchema as OrgEmailArgsObjectSchema } from './OrgEmailArgs.schema'

const makeSchema = () => z.object({
  emailOrg: z.union([z.boolean(), z.lazy(() => OrgEmailArgsObjectSchema)]).optional()
}).strict();
export const OrgEmailUseToIncludeObjectSchema: z.ZodType<Prisma.OrgEmailUseToInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToInclude>;
export const OrgEmailUseToIncludeObjectZodSchema = makeSchema();
