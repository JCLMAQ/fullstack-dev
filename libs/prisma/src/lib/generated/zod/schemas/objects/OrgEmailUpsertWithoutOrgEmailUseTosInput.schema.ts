import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUpdateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailCreateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './OrgEmailWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema)]),
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema)]),
  where: z.lazy(() => OrgEmailWhereInputObjectSchema).optional()
}).strict();
export const OrgEmailUpsertWithoutOrgEmailUseTosInputObjectSchema: z.ZodType<Prisma.OrgEmailUpsertWithoutOrgEmailUseTosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUpsertWithoutOrgEmailUseTosInput>;
export const OrgEmailUpsertWithoutOrgEmailUseTosInputObjectZodSchema = makeSchema();
