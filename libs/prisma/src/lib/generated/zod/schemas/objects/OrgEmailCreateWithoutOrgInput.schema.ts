import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateNestedManyWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  email: z.string(),
  description: z.string().optional().nullable(),
  OrgEmailUseTos: z.lazy(() => OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectSchema).optional()
}).strict();
export const OrgEmailCreateWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateWithoutOrgInput>;
export const OrgEmailCreateWithoutOrgInputObjectZodSchema = makeSchema();
