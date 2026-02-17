import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithoutMainOrgInputObjectSchema as OrganizationUpdateWithoutMainOrgInputObjectSchema } from './OrganizationUpdateWithoutMainOrgInput.schema';
import { OrganizationUncheckedUpdateWithoutMainOrgInputObjectSchema as OrganizationUncheckedUpdateWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedUpdateWithoutMainOrgInput.schema';
import { OrganizationCreateWithoutMainOrgInputObjectSchema as OrganizationCreateWithoutMainOrgInputObjectSchema } from './OrganizationCreateWithoutMainOrgInput.schema';
import { OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema as OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedCreateWithoutMainOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrganizationUpdateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutMainOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema)])
}).strict();
export const OrganizationUpsertWithWhereUniqueWithoutMainOrgInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithWhereUniqueWithoutMainOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithWhereUniqueWithoutMainOrgInput>;
export const OrganizationUpsertWithWhereUniqueWithoutMainOrgInputObjectZodSchema = makeSchema();
