import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutGroupsInputObjectSchema as OrganizationUpdateWithoutGroupsInputObjectSchema } from './OrganizationUpdateWithoutGroupsInput.schema';
import { OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema as OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutGroupsInput>;
export const OrganizationUpdateToOneWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();
