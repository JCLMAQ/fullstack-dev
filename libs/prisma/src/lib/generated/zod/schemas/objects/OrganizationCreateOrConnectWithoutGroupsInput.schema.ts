import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutGroupsInputObjectSchema as OrganizationCreateWithoutGroupsInputObjectSchema } from './OrganizationCreateWithoutGroupsInput.schema';
import { OrganizationUncheckedCreateWithoutGroupsInputObjectSchema as OrganizationUncheckedCreateWithoutGroupsInputObjectSchema } from './OrganizationUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutGroupsInput>;
export const OrganizationCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();
