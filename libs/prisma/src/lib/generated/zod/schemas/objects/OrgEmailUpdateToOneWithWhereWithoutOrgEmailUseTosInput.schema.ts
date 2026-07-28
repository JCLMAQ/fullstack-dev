import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './OrgEmailWhereInput.schema';
import { OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUpdateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema)])
}).strict();
export const OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInputObjectSchema: z.ZodType<Prisma.OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInput>;
export const OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInputObjectZodSchema = makeSchema();
