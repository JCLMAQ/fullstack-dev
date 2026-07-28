import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithoutMembersInputObjectSchema as OrganizationUpdateWithoutMembersInputObjectSchema } from './OrganizationUpdateWithoutMembersInput.schema';
import { OrganizationUncheckedUpdateWithoutMembersInputObjectSchema as OrganizationUncheckedUpdateWithoutMembersInputObjectSchema } from './OrganizationUncheckedUpdateWithoutMembersInput.schema';
import { OrganizationCreateWithoutMembersInputObjectSchema as OrganizationCreateWithoutMembersInputObjectSchema } from './OrganizationCreateWithoutMembersInput.schema';
import { OrganizationUncheckedCreateWithoutMembersInputObjectSchema as OrganizationUncheckedCreateWithoutMembersInputObjectSchema } from './OrganizationUncheckedCreateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrganizationUpdateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const OrganizationUpsertWithWhereUniqueWithoutMembersInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithWhereUniqueWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithWhereUniqueWithoutMembersInput>;
export const OrganizationUpsertWithWhereUniqueWithoutMembersInputObjectZodSchema = makeSchema();
