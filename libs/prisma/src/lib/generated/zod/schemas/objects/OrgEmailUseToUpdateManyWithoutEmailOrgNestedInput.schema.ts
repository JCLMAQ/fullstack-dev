import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateWithoutEmailOrgInput.schema';
import { OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedCreateWithoutEmailOrgInput.schema';
import { OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateOrConnectWithoutEmailOrgInput.schema';
import { OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInputObjectSchema as OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInput.schema';
import { OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectSchema as OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectSchema } from './OrgEmailUseToCreateManyEmailOrgInputEnvelope.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInputObjectSchema as OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInput.schema';
import { OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInputObjectSchema as OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInput.schema';
import { OrgEmailUseToScalarWhereInputObjectSchema as OrgEmailUseToScalarWhereInputObjectSchema } from './OrgEmailUseToScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema).array(), z.lazy(() => OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrgEmailUseToCreateManyEmailOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema), z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrgEmailUseToUpdateManyWithoutEmailOrgNestedInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToUpdateManyWithoutEmailOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToUpdateManyWithoutEmailOrgNestedInput>;
export const OrgEmailUseToUpdateManyWithoutEmailOrgNestedInputObjectZodSchema = makeSchema();
