import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgDomainCreateManyOrgInputObjectSchema as OrgDomainCreateManyOrgInputObjectSchema } from './OrgDomainCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrgDomainCreateManyOrgInputObjectSchema), z.lazy(() => OrgDomainCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrgDomainCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.OrgDomainCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainCreateManyOrgInputEnvelope>;
export const OrgDomainCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
