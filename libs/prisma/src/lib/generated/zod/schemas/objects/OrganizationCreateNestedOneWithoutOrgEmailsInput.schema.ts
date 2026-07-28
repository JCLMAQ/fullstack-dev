import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutOrgEmailsInputObjectSchema as OrganizationCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateWithoutOrgEmailsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEmailsInput.schema';
import { OrganizationCreateOrConnectWithoutOrgEmailsInputObjectSchema as OrganizationCreateOrConnectWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateOrConnectWithoutOrgEmailsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrgEmailsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutOrgEmailsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrgEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrgEmailsInput>;
export const OrganizationCreateNestedOneWithoutOrgEmailsInputObjectZodSchema = makeSchema();
