import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithoutMainOrgInputObjectSchema as OrganizationUpdateWithoutMainOrgInputObjectSchema } from './OrganizationUpdateWithoutMainOrgInput.schema';
import { OrganizationUncheckedUpdateWithoutMainOrgInputObjectSchema as OrganizationUncheckedUpdateWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedUpdateWithoutMainOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutMainOrgInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutMainOrgInputObjectSchema)])
}).strict();
export const OrganizationUpdateWithWhereUniqueWithoutMainOrgInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithWhereUniqueWithoutMainOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithWhereUniqueWithoutMainOrgInput>;
export const OrganizationUpdateWithWhereUniqueWithoutMainOrgInputObjectZodSchema = makeSchema();
