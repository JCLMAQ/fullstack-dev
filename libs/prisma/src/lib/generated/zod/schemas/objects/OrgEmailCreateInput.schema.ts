import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutOrgEmailsInputObjectSchema as OrganizationCreateNestedOneWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateNestedOneWithoutOrgEmailsInput.schema';
import { OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateNestedManyWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  email: z.string(),
  description: z.string().optional().nullable(),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutOrgEmailsInputObjectSchema).optional(),
  OrgEmailUseTos: z.lazy(() => OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectSchema).optional()
}).strict();
export const OrgEmailCreateInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateInput>;
export const OrgEmailCreateInputObjectZodSchema = makeSchema();
