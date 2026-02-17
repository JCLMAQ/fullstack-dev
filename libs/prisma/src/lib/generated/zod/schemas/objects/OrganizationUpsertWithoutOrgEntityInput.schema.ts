import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutOrgEntityInputObjectSchema as OrganizationUpdateWithoutOrgEntityInputObjectSchema } from './OrganizationUpdateWithoutOrgEntityInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgEntityInput.schema';
import { OrganizationCreateWithoutOrgEntityInputObjectSchema as OrganizationCreateWithoutOrgEntityInputObjectSchema } from './OrganizationCreateWithoutOrgEntityInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEntityInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutOrgEntityInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutOrgEntityInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutOrgEntityInput>;
export const OrganizationUpsertWithoutOrgEntityInputObjectZodSchema = makeSchema();
