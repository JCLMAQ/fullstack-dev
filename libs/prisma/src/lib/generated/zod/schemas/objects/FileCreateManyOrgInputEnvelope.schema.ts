import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateManyOrgInputObjectSchema as FileCreateManyOrgInputObjectSchema } from './FileCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileCreateManyOrgInputObjectSchema), z.lazy(() => FileCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyOrgInputEnvelope>;
export const FileCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
