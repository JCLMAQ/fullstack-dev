import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutOrgDomainsInputObjectSchema as OrganizationCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationCreateWithoutOrgDomainsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgDomainsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutOrgDomainsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrgDomainsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrgDomainsInput>;
export const OrganizationCreateOrConnectWithoutOrgDomainsInputObjectZodSchema = makeSchema();
