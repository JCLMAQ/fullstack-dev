import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutGroupsInputObjectSchema as OrganizationUpdateWithoutGroupsInputObjectSchema } from './OrganizationUpdateWithoutGroupsInput.schema';
import { OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema as OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutGroupsInput.schema';
import { OrganizationCreateWithoutGroupsInputObjectSchema as OrganizationCreateWithoutGroupsInputObjectSchema } from './OrganizationCreateWithoutGroupsInput.schema';
import { OrganizationUncheckedCreateWithoutGroupsInputObjectSchema as OrganizationUncheckedCreateWithoutGroupsInputObjectSchema } from './OrganizationUncheckedCreateWithoutGroupsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutGroupsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutGroupsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutGroupsInput>;
export const OrganizationUpsertWithoutGroupsInputObjectZodSchema = makeSchema();
