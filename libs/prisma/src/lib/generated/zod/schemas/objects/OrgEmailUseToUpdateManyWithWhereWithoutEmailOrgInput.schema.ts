import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailUseToScalarWhereInputObjectSchema as OrgEmailUseToScalarWhereInputObjectSchema } from './OrgEmailUseToScalarWhereInput.schema';
import { OrgEmailUseToUpdateManyMutationInputObjectSchema as OrgEmailUseToUpdateManyMutationInputObjectSchema } from './OrgEmailUseToUpdateManyMutationInput.schema';
import { OrgEmailUseToUncheckedUpdateManyWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedUpdateManyWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedUpdateManyWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrgEmailUseToUpdateManyMutationInputObjectSchema), z.lazy(() => OrgEmailUseToUncheckedUpdateManyWithoutEmailOrgInputObjectSchema)])
}).strict();
export const OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInput>;
export const OrgEmailUseToUpdateManyWithWhereWithoutEmailOrgInputObjectZodSchema = makeSchema();
