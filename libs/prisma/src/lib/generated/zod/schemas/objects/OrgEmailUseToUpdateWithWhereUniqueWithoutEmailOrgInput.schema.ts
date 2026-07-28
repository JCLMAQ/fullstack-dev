import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToUpdateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUpdateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUpdateWithoutEmailOrgInput.schema';
import { OrgEmailUseToUncheckedUpdateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedUpdateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedUpdateWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrgEmailUseToUpdateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUncheckedUpdateWithoutEmailOrgInputObjectSchema)])
}).strict();
export const OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInput>;
export const OrgEmailUseToUpdateWithWhereUniqueWithoutEmailOrgInputObjectZodSchema = makeSchema();
