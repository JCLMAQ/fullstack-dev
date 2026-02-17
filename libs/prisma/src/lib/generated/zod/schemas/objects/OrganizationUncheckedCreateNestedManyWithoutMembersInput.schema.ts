import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutMembersInputObjectSchema as OrganizationCreateWithoutMembersInputObjectSchema } from './OrganizationCreateWithoutMembersInput.schema';
import { OrganizationUncheckedCreateWithoutMembersInputObjectSchema as OrganizationUncheckedCreateWithoutMembersInputObjectSchema } from './OrganizationUncheckedCreateWithoutMembersInput.schema';
import { OrganizationCreateOrConnectWithoutMembersInputObjectSchema as OrganizationCreateOrConnectWithoutMembersInputObjectSchema } from './OrganizationCreateOrConnectWithoutMembersInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationCreateWithoutMembersInputObjectSchema).array(), z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationCreateOrConnectWithoutMembersInputObjectSchema), z.lazy(() => OrganizationCreateOrConnectWithoutMembersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationUncheckedCreateNestedManyWithoutMembersInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateNestedManyWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateNestedManyWithoutMembersInput>;
export const OrganizationUncheckedCreateNestedManyWithoutMembersInputObjectZodSchema = makeSchema();
