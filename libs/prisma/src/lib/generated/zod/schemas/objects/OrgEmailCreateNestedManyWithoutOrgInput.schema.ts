import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailCreateWithoutOrgInputObjectSchema as OrgEmailCreateWithoutOrgInputObjectSchema } from './OrgEmailCreateWithoutOrgInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgInput.schema';
import { OrgEmailCreateOrConnectWithoutOrgInputObjectSchema as OrgEmailCreateOrConnectWithoutOrgInputObjectSchema } from './OrgEmailCreateOrConnectWithoutOrgInput.schema';
import { OrgEmailCreateManyOrgInputEnvelopeObjectSchema as OrgEmailCreateManyOrgInputEnvelopeObjectSchema } from './OrgEmailCreateManyOrgInputEnvelope.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrgEmailCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrgEmailCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrgEmailWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrgEmailCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateNestedManyWithoutOrgInput>;
export const OrgEmailCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();
