import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutOrgDomainsInputObjectSchema as OrganizationCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationCreateWithoutOrgDomainsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgDomainsInput.schema';
import { OrganizationCreateOrConnectWithoutOrgDomainsInputObjectSchema as OrganizationCreateOrConnectWithoutOrgDomainsInputObjectSchema } from './OrganizationCreateOrConnectWithoutOrgDomainsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrgDomainsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutOrgDomainsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrgDomainsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrgDomainsInput>;
export const OrganizationCreateNestedOneWithoutOrgDomainsInputObjectZodSchema = makeSchema();
