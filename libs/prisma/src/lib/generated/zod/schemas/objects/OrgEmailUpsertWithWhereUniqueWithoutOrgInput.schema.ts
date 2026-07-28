import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema';
import { OrgEmailUpdateWithoutOrgInputObjectSchema as OrgEmailUpdateWithoutOrgInputObjectSchema } from './OrgEmailUpdateWithoutOrgInput.schema';
import { OrgEmailUncheckedUpdateWithoutOrgInputObjectSchema as OrgEmailUncheckedUpdateWithoutOrgInputObjectSchema } from './OrgEmailUncheckedUpdateWithoutOrgInput.schema';
import { OrgEmailCreateWithoutOrgInputObjectSchema as OrgEmailCreateWithoutOrgInputObjectSchema } from './OrgEmailCreateWithoutOrgInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrgEmailUpdateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const OrgEmailUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUpsertWithWhereUniqueWithoutOrgInput>;
export const OrgEmailUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
