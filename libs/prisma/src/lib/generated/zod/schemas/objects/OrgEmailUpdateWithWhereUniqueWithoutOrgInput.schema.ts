import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema';
import { OrgEmailUpdateWithoutOrgInputObjectSchema as OrgEmailUpdateWithoutOrgInputObjectSchema } from './OrgEmailUpdateWithoutOrgInput.schema';
import { OrgEmailUncheckedUpdateWithoutOrgInputObjectSchema as OrgEmailUncheckedUpdateWithoutOrgInputObjectSchema } from './OrgEmailUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrgEmailUpdateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const OrgEmailUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUpdateWithWhereUniqueWithoutOrgInput>;
export const OrgEmailUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
