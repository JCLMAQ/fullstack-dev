import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateManyMainOrgInputObjectSchema as OrganizationCreateManyMainOrgInputObjectSchema } from './OrganizationCreateManyMainOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrganizationCreateManyMainOrgInputObjectSchema), z.lazy(() => OrganizationCreateManyMainOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrganizationCreateManyMainOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.OrganizationCreateManyMainOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateManyMainOrgInputEnvelope>;
export const OrganizationCreateManyMainOrgInputEnvelopeObjectZodSchema = makeSchema();
