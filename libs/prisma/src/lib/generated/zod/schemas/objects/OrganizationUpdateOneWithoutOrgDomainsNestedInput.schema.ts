import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutOrgDomainsInputObjectSchema as OrganizationCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationCreateWithoutOrgDomainsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgDomainsInput.schema';
import { OrganizationCreateOrConnectWithoutOrgDomainsInputObjectSchema as OrganizationCreateOrConnectWithoutOrgDomainsInputObjectSchema } from './OrganizationCreateOrConnectWithoutOrgDomainsInput.schema';
import { OrganizationUpsertWithoutOrgDomainsInputObjectSchema as OrganizationUpsertWithoutOrgDomainsInputObjectSchema } from './OrganizationUpsertWithoutOrgDomainsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutOrgDomainsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutOrgDomainsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutOrgDomainsInput.schema';
import { OrganizationUpdateWithoutOrgDomainsInputObjectSchema as OrganizationUpdateWithoutOrgDomainsInputObjectSchema } from './OrganizationUpdateWithoutOrgDomainsInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgDomainsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgDomainsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrgDomainsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutOrgDomainsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutOrgDomainsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgDomainsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutOrgDomainsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutOrgDomainsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutOrgDomainsNestedInput>;
export const OrganizationUpdateOneWithoutOrgDomainsNestedInputObjectZodSchema = makeSchema();
