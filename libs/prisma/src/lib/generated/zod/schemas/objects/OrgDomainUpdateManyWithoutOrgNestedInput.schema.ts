import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgDomainCreateWithoutOrgInputObjectSchema as OrgDomainCreateWithoutOrgInputObjectSchema } from './OrgDomainCreateWithoutOrgInput.schema';
import { OrgDomainUncheckedCreateWithoutOrgInputObjectSchema as OrgDomainUncheckedCreateWithoutOrgInputObjectSchema } from './OrgDomainUncheckedCreateWithoutOrgInput.schema';
import { OrgDomainCreateOrConnectWithoutOrgInputObjectSchema as OrgDomainCreateOrConnectWithoutOrgInputObjectSchema } from './OrgDomainCreateOrConnectWithoutOrgInput.schema';
import { OrgDomainUpsertWithWhereUniqueWithoutOrgInputObjectSchema as OrgDomainUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './OrgDomainUpsertWithWhereUniqueWithoutOrgInput.schema';
import { OrgDomainCreateManyOrgInputEnvelopeObjectSchema as OrgDomainCreateManyOrgInputEnvelopeObjectSchema } from './OrgDomainCreateManyOrgInputEnvelope.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './OrgDomainWhereUniqueInput.schema';
import { OrgDomainUpdateWithWhereUniqueWithoutOrgInputObjectSchema as OrgDomainUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './OrgDomainUpdateWithWhereUniqueWithoutOrgInput.schema';
import { OrgDomainUpdateManyWithWhereWithoutOrgInputObjectSchema as OrgDomainUpdateManyWithWhereWithoutOrgInputObjectSchema } from './OrgDomainUpdateManyWithWhereWithoutOrgInput.schema';
import { OrgDomainScalarWhereInputObjectSchema as OrgDomainScalarWhereInputObjectSchema } from './OrgDomainScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgDomainCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => OrgDomainUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrgDomainCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrgDomainUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrgDomainCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrgDomainWhereUniqueInputObjectSchema), z.lazy(() => OrgDomainWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrgDomainWhereUniqueInputObjectSchema), z.lazy(() => OrgDomainWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrgDomainWhereUniqueInputObjectSchema), z.lazy(() => OrgDomainWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrgDomainWhereUniqueInputObjectSchema), z.lazy(() => OrgDomainWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrgDomainUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrgDomainUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrgDomainScalarWhereInputObjectSchema), z.lazy(() => OrgDomainScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrgDomainUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.OrgDomainUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainUpdateManyWithoutOrgNestedInput>;
export const OrgDomainUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();
