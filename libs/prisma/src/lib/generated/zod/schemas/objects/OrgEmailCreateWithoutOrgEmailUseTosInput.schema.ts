import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateNestedOneWithoutOrgEmailsInputObjectSchema as OrganizationCreateNestedOneWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateNestedOneWithoutOrgEmailsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  email: z.string(),
  description: z.string().optional().nullable(),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutOrgEmailsInputObjectSchema).optional()
}).strict();
export const OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateWithoutOrgEmailUseTosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateWithoutOrgEmailUseTosInput>;
export const OrgEmailCreateWithoutOrgEmailUseTosInputObjectZodSchema = makeSchema();
