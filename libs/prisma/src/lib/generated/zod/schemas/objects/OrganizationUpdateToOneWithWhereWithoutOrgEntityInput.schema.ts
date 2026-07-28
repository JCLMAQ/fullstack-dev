import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutOrgEntityInputObjectSchema as OrganizationUpdateWithoutOrgEntityInputObjectSchema } from './OrganizationUpdateWithoutOrgEntityInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgEntityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutOrgEntityInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrgEntityInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrgEntityInput>;
export const OrganizationUpdateToOneWithWhereWithoutOrgEntityInputObjectZodSchema = makeSchema();
