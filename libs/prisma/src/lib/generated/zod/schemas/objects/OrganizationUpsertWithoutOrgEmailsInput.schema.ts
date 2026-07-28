import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationUpdateWithoutOrgEmailsInputObjectSchema as OrganizationUpdateWithoutOrgEmailsInputObjectSchema } from './OrganizationUpdateWithoutOrgEmailsInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgEmailsInput.schema';
import { OrganizationCreateWithoutOrgEmailsInputObjectSchema as OrganizationCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateWithoutOrgEmailsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEmailsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutOrgEmailsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutOrgEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutOrgEmailsInput>;
export const OrganizationUpsertWithoutOrgEmailsInputObjectZodSchema = makeSchema();
