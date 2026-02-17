import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgDomainCreateWithoutOrgInputObjectSchema as OrgDomainCreateWithoutOrgInputObjectSchema } from './OrgDomainCreateWithoutOrgInput.schema';
import { OrgDomainUncheckedCreateWithoutOrgInputObjectSchema as OrgDomainUncheckedCreateWithoutOrgInputObjectSchema } from './OrgDomainUncheckedCreateWithoutOrgInput.schema';
import { OrgDomainCreateOrConnectWithoutOrgInputObjectSchema as OrgDomainCreateOrConnectWithoutOrgInputObjectSchema } from './OrgDomainCreateOrConnectWithoutOrgInput.schema';
import { OrgDomainCreateManyOrgInputEnvelopeObjectSchema as OrgDomainCreateManyOrgInputEnvelopeObjectSchema } from './OrgDomainCreateManyOrgInputEnvelope.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './OrgDomainWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgDomainCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => OrgDomainUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrgDomainCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrgDomainCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrgDomainWhereUniqueInputObjectSchema), z.lazy(() => OrgDomainWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrgDomainCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgDomainCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainCreateNestedManyWithoutOrgInput>;
export const OrgDomainCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();
