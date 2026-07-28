import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutMainOrgInputObjectSchema as OrganizationCreateWithoutMainOrgInputObjectSchema } from './OrganizationCreateWithoutMainOrgInput.schema';
import { OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema as OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedCreateWithoutMainOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutMainOrgInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutMainOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutMainOrgInput>;
export const OrganizationCreateOrConnectWithoutMainOrgInputObjectZodSchema = makeSchema();
