import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutOrgEmailsInputObjectSchema as OrganizationCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateWithoutOrgEmailsInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEmailsInput.schema';
import { OrganizationCreateOrConnectWithoutOrgEmailsInputObjectSchema as OrganizationCreateOrConnectWithoutOrgEmailsInputObjectSchema } from './OrganizationCreateOrConnectWithoutOrgEmailsInput.schema';
import { OrganizationUpsertWithoutOrgEmailsInputObjectSchema as OrganizationUpsertWithoutOrgEmailsInputObjectSchema } from './OrganizationUpsertWithoutOrgEmailsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutOrgEmailsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutOrgEmailsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutOrgEmailsInput.schema';
import { OrganizationUpdateWithoutOrgEmailsInputObjectSchema as OrganizationUpdateWithoutOrgEmailsInputObjectSchema } from './OrganizationUpdateWithoutOrgEmailsInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgEmailsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEmailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrgEmailsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutOrgEmailsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutOrgEmailsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutOrgEmailsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutOrgEmailsNestedInput>;
export const OrganizationUpdateOneWithoutOrgEmailsNestedInputObjectZodSchema = makeSchema();
