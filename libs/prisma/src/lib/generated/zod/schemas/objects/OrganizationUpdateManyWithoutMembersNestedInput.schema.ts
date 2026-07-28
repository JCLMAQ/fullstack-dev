import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutMembersInputObjectSchema as OrganizationCreateWithoutMembersInputObjectSchema } from './OrganizationCreateWithoutMembersInput.schema';
import { OrganizationUncheckedCreateWithoutMembersInputObjectSchema as OrganizationUncheckedCreateWithoutMembersInputObjectSchema } from './OrganizationUncheckedCreateWithoutMembersInput.schema';
import { OrganizationCreateOrConnectWithoutMembersInputObjectSchema as OrganizationCreateOrConnectWithoutMembersInputObjectSchema } from './OrganizationCreateOrConnectWithoutMembersInput.schema';
import { OrganizationUpsertWithWhereUniqueWithoutMembersInputObjectSchema as OrganizationUpsertWithWhereUniqueWithoutMembersInputObjectSchema } from './OrganizationUpsertWithWhereUniqueWithoutMembersInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithWhereUniqueWithoutMembersInputObjectSchema as OrganizationUpdateWithWhereUniqueWithoutMembersInputObjectSchema } from './OrganizationUpdateWithWhereUniqueWithoutMembersInput.schema';
import { OrganizationUpdateManyWithWhereWithoutMembersInputObjectSchema as OrganizationUpdateManyWithWhereWithoutMembersInputObjectSchema } from './OrganizationUpdateManyWithWhereWithoutMembersInput.schema';
import { OrganizationScalarWhereInputObjectSchema as OrganizationScalarWhereInputObjectSchema } from './OrganizationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationCreateWithoutMembersInputObjectSchema).array(), z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganizationCreateOrConnectWithoutMembersInputObjectSchema), z.lazy(() => OrganizationCreateOrConnectWithoutMembersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganizationUpsertWithWhereUniqueWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUpsertWithWhereUniqueWithoutMembersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganizationWhereUniqueInputObjectSchema), z.lazy(() => OrganizationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateWithWhereUniqueWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUpdateWithWhereUniqueWithoutMembersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganizationUpdateManyWithWhereWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUpdateManyWithWhereWithoutMembersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganizationScalarWhereInputObjectSchema), z.lazy(() => OrganizationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrganizationUpdateManyWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateManyWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateManyWithoutMembersNestedInput>;
export const OrganizationUpdateManyWithoutMembersNestedInputObjectZodSchema = makeSchema();
