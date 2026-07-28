import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailCreateNestedOneWithoutOrgEmailUseTosInputObjectSchema as OrgEmailCreateNestedOneWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailCreateNestedOneWithoutOrgEmailUseTosInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  useTo: z.string(),
  isActiv: z.boolean(),
  emailOrg: z.lazy(() => OrgEmailCreateNestedOneWithoutOrgEmailUseTosInputObjectSchema)
}).strict();
export const OrgEmailUseToCreateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToCreateInput>;
export const OrgEmailUseToCreateInputObjectZodSchema = makeSchema();
