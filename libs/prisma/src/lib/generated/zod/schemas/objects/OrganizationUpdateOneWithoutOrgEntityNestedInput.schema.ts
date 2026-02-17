import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutOrgEntityInputObjectSchema as OrganizationCreateWithoutOrgEntityInputObjectSchema } from './OrganizationCreateWithoutOrgEntityInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEntityInput.schema';
import { OrganizationCreateOrConnectWithoutOrgEntityInputObjectSchema as OrganizationCreateOrConnectWithoutOrgEntityInputObjectSchema } from './OrganizationCreateOrConnectWithoutOrgEntityInput.schema';
import { OrganizationUpsertWithoutOrgEntityInputObjectSchema as OrganizationUpsertWithoutOrgEntityInputObjectSchema } from './OrganizationUpsertWithoutOrgEntityInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutOrgEntityInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutOrgEntityInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutOrgEntityInput.schema';
import { OrganizationUpdateWithoutOrgEntityInputObjectSchema as OrganizationUpdateWithoutOrgEntityInputObjectSchema } from './OrganizationUpdateWithoutOrgEntityInput.schema';
import { OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema as OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema } from './OrganizationUncheckedUpdateWithoutOrgEntityInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrgEntityInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutOrgEntityInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrgEntityInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutOrgEntityNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutOrgEntityNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutOrgEntityNestedInput>;
export const OrganizationUpdateOneWithoutOrgEntityNestedInputObjectZodSchema = makeSchema();
