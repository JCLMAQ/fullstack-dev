import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './OrgDomainWhereUniqueInput.schema';
import { OrgDomainCreateWithoutOrgInputObjectSchema as OrgDomainCreateWithoutOrgInputObjectSchema } from './OrgDomainCreateWithoutOrgInput.schema';
import { OrgDomainUncheckedCreateWithoutOrgInputObjectSchema as OrgDomainUncheckedCreateWithoutOrgInputObjectSchema } from './OrgDomainUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgDomainWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrgDomainCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const OrgDomainCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgDomainCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainCreateOrConnectWithoutOrgInput>;
export const OrgDomainCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();
