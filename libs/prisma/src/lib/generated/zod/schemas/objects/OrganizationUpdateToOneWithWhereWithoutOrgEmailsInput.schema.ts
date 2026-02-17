import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutOrgEmailsInputObjectSchema as OrganizationUpdateWithoutOrgEmailsInputObjectSchema } from './OrganizationUpdateWithoutOrgEmailsInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgEmailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutOrgEmailsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgEmailsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutOrgEmailsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrgEmailsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrgEmailsInput>;
export const OrganizationUpdateToOneWithWhereWithoutOrgEmailsInputObjectZodSchema = makeSchema();
