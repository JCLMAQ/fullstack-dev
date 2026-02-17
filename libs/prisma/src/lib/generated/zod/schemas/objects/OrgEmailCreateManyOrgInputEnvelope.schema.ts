import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailCreateManyOrgInputObjectSchema as OrgEmailCreateManyOrgInputObjectSchema } from './OrgEmailCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrgEmailCreateManyOrgInputObjectSchema), z.lazy(() => OrgEmailCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrgEmailCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.OrgEmailCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateManyOrgInputEnvelope>;
export const OrgEmailCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
