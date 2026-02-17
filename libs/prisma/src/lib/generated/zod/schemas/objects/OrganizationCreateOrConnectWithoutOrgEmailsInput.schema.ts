import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutOrgEmailsInputObjectSchema as OrganizationCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateWithoutOrgEmailsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEmailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutOrgEmailsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrgEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrgEmailsInput>;
export const OrganizationCreateOrConnectWithoutOrgEmailsInputObjectZodSchema = makeSchema();
