import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateManyOrgInputObjectSchema as GroupCreateManyOrgInputObjectSchema } from './GroupCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GroupCreateManyOrgInputObjectSchema), z.lazy(() => GroupCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GroupCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.GroupCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateManyOrgInputEnvelope>;
export const GroupCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
