import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutOrgDomainsInputObjectSchema as OrganizationUpdateWithoutOrgDomainsInputObjectSchema } from './OrganizationUpdateWithoutOrgDomainsInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgDomainsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutOrgDomainsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrgDomainsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrgDomainsInput>;
export const OrganizationUpdateToOneWithWhereWithoutOrgDomainsInputObjectZodSchema = makeSchema();
