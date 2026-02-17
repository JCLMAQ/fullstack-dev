import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateWithoutEmailOrgInput.schema';
import { OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedCreateWithoutEmailOrgInput.schema';
import { OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateOrConnectWithoutEmailOrgInput.schema';
import { OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectSchema as OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectSchema } from './OrgEmailUseToCreateManyEmailOrgInputEnvelope.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './OrgEmailUseToWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema).array(), z.lazy(() => OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToCreateNestedManyWithoutEmailOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToCreateNestedManyWithoutEmailOrgInput>;
export const OrgEmailUseToCreateNestedManyWithoutEmailOrgInputObjectZodSchema = makeSchema();
