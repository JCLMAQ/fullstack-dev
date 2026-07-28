import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationScalarWhereInputObjectSchema as OrganizationScalarWhereInputObjectSchema } from './OrganizationScalarWhereInput.schema';
import { OrganizationUpdateManyMutationInputObjectSchema as OrganizationUpdateManyMutationInputObjectSchema } from './OrganizationUpdateManyMutationInput.schema';
import { OrganizationUncheckedUpdateManyWithoutMainOrgInputObjectSchema as OrganizationUncheckedUpdateManyWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedUpdateManyWithoutMainOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrganizationUpdateManyMutationInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateManyWithoutMainOrgInputObjectSchema)])
}).strict();
export const OrganizationUpdateManyWithWhereWithoutMainOrgInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateManyWithWhereWithoutMainOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateManyWithWhereWithoutMainOrgInput>;
export const OrganizationUpdateManyWithWhereWithoutMainOrgInputObjectZodSchema = makeSchema();
