import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutOrgEntityInputObjectSchema as OrganizationCreateWithoutOrgEntityInputObjectSchema } from './OrganizationCreateWithoutOrgEntityInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEntityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutOrgEntityInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrgEntityInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrgEntityInput>;
export const OrganizationCreateOrConnectWithoutOrgEntityInputObjectZodSchema = makeSchema();
