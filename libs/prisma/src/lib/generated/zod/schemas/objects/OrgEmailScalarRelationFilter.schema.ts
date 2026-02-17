import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './OrgEmailWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => OrgEmailWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => OrgEmailWhereInputObjectSchema).optional()
}).strict();
export const OrgEmailScalarRelationFilterObjectSchema: z.ZodType<Prisma.OrgEmailScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailScalarRelationFilter>;
export const OrgEmailScalarRelationFilterObjectZodSchema = makeSchema();
