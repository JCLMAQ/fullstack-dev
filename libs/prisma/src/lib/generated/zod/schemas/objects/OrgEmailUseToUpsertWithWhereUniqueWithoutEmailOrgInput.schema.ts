import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToUpdateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUpdateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUpdateWithoutEmailOrgInput.schema';
import { OrgEmailUseToUncheckedUpdateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedUpdateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedUpdateWithoutEmailOrgInput.schema';
import { OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateWithoutEmailOrgInput.schema';
import { OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedCreateWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrgEmailUseToUpdateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUncheckedUpdateWithoutEmailOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema)])
}).strict();
export const OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInput>;
export const OrgEmailUseToUpsertWithWhereUniqueWithoutEmailOrgInputObjectZodSchema = makeSchema();
