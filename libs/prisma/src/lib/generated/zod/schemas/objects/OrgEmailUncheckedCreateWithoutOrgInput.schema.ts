import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  email: z.string(),
  description: z.string().optional().nullable(),
  OrgEmailUseTos: z.lazy(() => OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInputObjectSchema).optional()
}).strict();
export const OrgEmailUncheckedCreateWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUncheckedCreateWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUncheckedCreateWithoutOrgInput>;
export const OrgEmailUncheckedCreateWithoutOrgInputObjectZodSchema = makeSchema();
