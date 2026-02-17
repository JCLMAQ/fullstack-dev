import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutGroupsInputObjectSchema as OrganizationCreateWithoutGroupsInputObjectSchema } from './OrganizationCreateWithoutGroupsInput.schema';
import { OrganizationUncheckedCreateWithoutGroupsInputObjectSchema as OrganizationUncheckedCreateWithoutGroupsInputObjectSchema } from './OrganizationUncheckedCreateWithoutGroupsInput.schema';
import { OrganizationCreateOrConnectWithoutGroupsInputObjectSchema as OrganizationCreateOrConnectWithoutGroupsInputObjectSchema } from './OrganizationCreateOrConnectWithoutGroupsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutGroupsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutGroupsInput>;
export const OrganizationCreateNestedOneWithoutGroupsInputObjectZodSchema = makeSchema();
