import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateWithoutMembersInputObjectSchema as OrganizationUpdateWithoutMembersInputObjectSchema } from './OrganizationUpdateWithoutMembersInput.schema';
import { OrganizationUncheckedUpdateWithoutMembersInputObjectSchema as OrganizationUncheckedUpdateWithoutMembersInputObjectSchema } from './OrganizationUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const OrganizationUpdateWithWhereUniqueWithoutMembersInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithWhereUniqueWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithWhereUniqueWithoutMembersInput>;
export const OrganizationUpdateWithWhereUniqueWithoutMembersInputObjectZodSchema = makeSchema();
