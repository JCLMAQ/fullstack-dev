import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgDomainWhereInputObjectSchema as OrgDomainWhereInputObjectSchema } from './OrgDomainWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OrgDomainWhereInputObjectSchema).optional(),
  some: z.lazy(() => OrgDomainWhereInputObjectSchema).optional(),
  none: z.lazy(() => OrgDomainWhereInputObjectSchema).optional()
}).strict();
export const OrgDomainListRelationFilterObjectSchema: z.ZodType<Prisma.OrgDomainListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainListRelationFilter>;
export const OrgDomainListRelationFilterObjectZodSchema = makeSchema();
