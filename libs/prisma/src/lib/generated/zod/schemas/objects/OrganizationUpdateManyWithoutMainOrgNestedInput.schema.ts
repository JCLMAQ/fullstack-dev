import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutMainOrgInputObjectSchema as OrganizationCreateWithoutMainOrgInputObjectSchema } from './OrganizationCreateWithoutMainOrgInput.schema';
import { OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema as OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedCreateWithoutMainOrgInput.schema';
import { OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema as OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema } from './OrganizationCreateOrConnectWithoutMainOrgInput.schema';
import { OrganizationUpsertWithWhereUniqueWithoutMainOrgInputObjectSchema as OrganizationUpsertWithWhereUniqueWithoutMainOrgInputObjectSchema } from './OrganizationUpsertWithWhereUniqueWithoutMainOrgInput.schema';
import { OrganizationCreateManyMainOrgInputEnvelopeObjectSchema as OrganizationCreateManyMainOrgInputEnvelopeObjectSchema } from './OrganizationCreateManyMainOrgInputEnvelope.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithWhereUniqueWithoutMainOrgInputObjectSchema as OrganizationUpdateWithWhereUniqueWithoutMainOrgInputObjectSchema } from './OrganizationUpdateWithWhereUniqueWithoutMainOrgInput.schema';
import { OrganizationUpdateManyWithWhereWithoutMainOrgInputObjectSchema as OrganizationUpdateManyWithWhereWithoutMainOrgInputObjectSchema } from './OrganizationUpdateManyWithWhereWithoutMainOrgInput.schema';
import { OrganizationScalarWhereInputObjectSchema as OrganizationScalarWhereInputObjectSchema } from './OrganizationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationCreateWithoutMainOrgInputObjectSchema).array(), z.lazy(() => OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganizationUpsertWithWhereUniqueWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUpsertWithWhereUniqueWithoutMainOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganizationCreateManyMainOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateWithWhereUniqueWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUpdateWithWhereUniqueWithoutMainOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganizationUpdateManyWithWhereWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUpdateManyWithWhereWithoutMainOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganizationScalarWhereInputObjectSchema), z.lazy(() => OrganizationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationUpdateManyWithoutMainOrgNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateManyWithoutMainOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateManyWithoutMainOrgNestedInput>;
export const OrganizationUpdateManyWithoutMainOrgNestedInputObjectZodSchema = makeSchema();
