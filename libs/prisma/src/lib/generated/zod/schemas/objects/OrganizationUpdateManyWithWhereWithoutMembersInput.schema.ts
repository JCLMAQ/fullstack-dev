import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationScalarWhereInputObjectSchema as OrganizationScalarWhereInputObjectSchema } from './OrganizationScalarWhereInput.schema';
import { OrganizationUpdateManyMutationInputObjectSchema as OrganizationUpdateManyMutationInputObjectSchema } from './OrganizationUpdateManyMutationInput.schema';
import { OrganizationUncheckedUpdateManyWithoutMembersInputObjectSchema as OrganizationUncheckedUpdateManyWithoutMembersInputObjectSchema } from './OrganizationUncheckedUpdateManyWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationUpdateManyMutationInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateManyWithoutMembersInputObjectSchema)])
}).strict();
export const OrganizationUpdateManyWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateManyWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateManyWithWhereWithoutMembersInput>;
export const OrganizationUpdateManyWithWhereWithoutMembersInputObjectZodSchema = makeSchema();
