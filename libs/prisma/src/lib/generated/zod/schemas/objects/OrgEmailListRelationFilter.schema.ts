import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './OrgEmailWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OrgEmailWhereInputObjectSchema).optional(),
  some: z.lazy(() => OrgEmailWhereInputObjectSchema).optional(),
  none: z.lazy(() => OrgEmailWhereInputObjectSchema).optional()
}).strict();
export const OrgEmailListRelationFilterObjectSchema: z.ZodType<Prisma.OrgEmailListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailListRelationFilter>;
export const OrgEmailListRelationFilterObjectZodSchema = makeSchema();
