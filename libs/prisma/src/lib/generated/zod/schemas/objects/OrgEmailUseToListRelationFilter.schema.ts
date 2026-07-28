import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './OrgEmailUseToWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OrgEmailUseToWhereInputObjectSchema).optional(),
  some: z.lazy(() => OrgEmailUseToWhereInputObjectSchema).optional(),
  none: z.lazy(() => OrgEmailUseToWhereInputObjectSchema).optional()
}).strict();
export const OrgEmailUseToListRelationFilterObjectSchema: z.ZodType<Prisma.OrgEmailUseToListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToListRelationFilter>;
export const OrgEmailUseToListRelationFilterObjectZodSchema = makeSchema();
