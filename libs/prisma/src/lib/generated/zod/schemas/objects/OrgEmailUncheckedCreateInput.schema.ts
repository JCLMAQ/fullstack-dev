import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  email: z.string(),
  description: z.string().optional().nullable(),
  orgId: z.string(),
  OrgEmailUseTos: z.lazy(() => OrgEmailUseToUncheckedCreateNestedManyWithoutEmailOrgInputObjectSchema).optional()
}).strict();
export const OrgEmailUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrgEmailUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUncheckedCreateInput>;
export const OrgEmailUncheckedCreateInputObjectZodSchema = makeSchema();
