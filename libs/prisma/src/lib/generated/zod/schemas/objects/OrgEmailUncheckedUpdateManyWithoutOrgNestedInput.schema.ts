import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailCreateWithoutOrgInputObjectSchema as OrgEmailCreateWithoutOrgInputObjectSchema } from './OrgEmailCreateWithoutOrgInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgInput.schema';
import { OrgEmailCreateOrConnectWithoutOrgInputObjectSchema as OrgEmailCreateOrConnectWithoutOrgInputObjectSchema } from './OrgEmailCreateOrConnectWithoutOrgInput.schema';
import { OrgEmailUpsertWithWhereUniqueWithoutOrgInputObjectSchema as OrgEmailUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './OrgEmailUpsertWithWhereUniqueWithoutOrgInput.schema';
import { OrgEmailCreateManyOrgInputEnvelopeObjectSchema as OrgEmailCreateManyOrgInputEnvelopeObjectSchema } from './OrgEmailCreateManyOrgInputEnvelope.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema';
import { OrgEmailUpdateWithWhereUniqueWithoutOrgInputObjectSchema as OrgEmailUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './OrgEmailUpdateWithWhereUniqueWithoutOrgInput.schema';
import { OrgEmailUpdateManyWithWhereWithoutOrgInputObjectSchema as OrgEmailUpdateManyWithWhereWithoutOrgInputObjectSchema } from './OrgEmailUpdateManyWithWhereWithoutOrgInput.schema';
import { OrgEmailScalarWhereInputObjectSchema as OrgEmailScalarWhereInputObjectSchema } from './OrgEmailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrgEmailCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrgEmailUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrgEmailCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrgEmailWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrgEmailWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrgEmailWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrgEmailWhereUniqueInputObjectSchema), z.lazy(() => OrgEmailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrgEmailUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrgEmailUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrgEmailScalarWhereInputObjectSchema), z.lazy(() => OrgEmailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrgEmailUncheckedUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.OrgEmailUncheckedUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUncheckedUpdateManyWithoutOrgNestedInput>;
export const OrgEmailUncheckedUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();
