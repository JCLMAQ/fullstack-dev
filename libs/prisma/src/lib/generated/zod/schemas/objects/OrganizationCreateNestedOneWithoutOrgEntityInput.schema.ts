import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutOrgEntityInputObjectSchema as OrganizationCreateWithoutOrgEntityInputObjectSchema } from './OrganizationCreateWithoutOrgEntityInput.schema';
import { OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema as OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema } from './OrganizationUncheckedCreateWithoutOrgEntityInput.schema';
import { OrganizationCreateOrConnectWithoutOrgEntityInputObjectSchema as OrganizationCreateOrConnectWithoutOrgEntityInputObjectSchema } from './OrganizationCreateOrConnectWithoutOrgEntityInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutOrgEntityInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrgEntityInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrgEntityInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutOrgEntityInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrgEntityInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrgEntityInput>;
export const OrganizationCreateNestedOneWithoutOrgEntityInputObjectZodSchema = makeSchema();
