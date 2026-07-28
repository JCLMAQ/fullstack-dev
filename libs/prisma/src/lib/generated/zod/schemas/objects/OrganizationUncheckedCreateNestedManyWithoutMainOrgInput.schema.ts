import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutMainOrgInputObjectSchema as OrganizationCreateWithoutMainOrgInputObjectSchema } from './OrganizationCreateWithoutMainOrgInput.schema';
import { OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema as OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedCreateWithoutMainOrgInput.schema';
import { OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema as OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema } from './OrganizationCreateOrConnectWithoutMainOrgInput.schema';
import { OrganizationCreateManyMainOrgInputEnvelopeObjectSchema as OrganizationCreateManyMainOrgInputEnvelopeObjectSchema } from './OrganizationCreateManyMainOrgInputEnvelope.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationCreateWithoutMainOrgInputObjectSchema).array(), z.lazy(() => OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganizationCreateManyMainOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationUncheckedCreateNestedManyWithoutMainOrgInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateNestedManyWithoutMainOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateNestedManyWithoutMainOrgInput>;
export const OrganizationUncheckedCreateNestedManyWithoutMainOrgInputObjectZodSchema = makeSchema();
