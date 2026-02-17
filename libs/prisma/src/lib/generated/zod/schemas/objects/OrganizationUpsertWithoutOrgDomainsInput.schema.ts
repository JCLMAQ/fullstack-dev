import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutOrgDomainsInputObjectSchema as OrganizationUpdateWithoutOrgDomainsInputObjectSchema } from './OrganizationUpdateWithoutOrgDomainsInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgDomainsInput.schema';
import { OrganizationCreateWithoutOrgDomainsInputObjectSchema as OrganizationCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationCreateWithoutOrgDomainsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgDomainsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutOrgDomainsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutOrgDomainsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutOrgDomainsInput>;
export const OrganizationUpsertWithoutOrgDomainsInputObjectZodSchema = makeSchema();
