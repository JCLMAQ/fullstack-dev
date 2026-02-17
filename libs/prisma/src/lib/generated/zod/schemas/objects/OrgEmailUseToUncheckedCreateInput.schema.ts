import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  useTo: z.string(),
  isActiv: z.boolean(),
  emailOrgId: z.number().int()
}).strict();
export const OrgEmailUseToUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToUncheckedCreateInput>;
export const OrgEmailUseToUncheckedCreateInputObjectZodSchema = makeSchema();
