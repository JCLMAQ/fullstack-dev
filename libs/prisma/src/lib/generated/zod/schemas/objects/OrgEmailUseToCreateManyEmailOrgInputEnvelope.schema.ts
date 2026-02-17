import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUseToCreateManyEmailOrgInputObjectSchema as OrgEmailUseToCreateManyEmailOrgInputObjectSchema } from './OrgEmailUseToCreateManyEmailOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrgEmailUseToCreateManyEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToCreateManyEmailOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.OrgEmailUseToCreateManyEmailOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToCreateManyEmailOrgInputEnvelope>;
export const OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectZodSchema = makeSchema();
