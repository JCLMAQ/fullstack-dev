import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  useTo: z.string(),
  isActiv: z.boolean()
}).strict();
export const OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToUncheckedCreateWithoutEmailOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToUncheckedCreateWithoutEmailOrgInput>;
export const OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectZodSchema = makeSchema();
