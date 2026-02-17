import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailCreateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectSchema as OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailCreateOrConnectWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUpsertWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUpsertWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUpsertWithoutOrgEmailUseTosInput.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema';
import { OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUpdateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectSchema).optional(),
  upsert: z.lazy(() => OrgEmailUpsertWithoutOrgEmailUseTosInputObjectSchema).optional(),
  connect: z.lazy(() => OrgEmailWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrgEmailUpdateToOneWithWhereWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUpdateWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUncheckedUpdateWithoutOrgEmailUseTosInputObjectSchema)]).optional()
}).strict();
export const OrgEmailUpdateOneRequiredWithoutOrgEmailUseTosNestedInputObjectSchema: z.ZodType<Prisma.OrgEmailUpdateOneRequiredWithoutOrgEmailUseTosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUpdateOneRequiredWithoutOrgEmailUseTosNestedInput>;
export const OrgEmailUpdateOneRequiredWithoutOrgEmailUseTosNestedInputObjectZodSchema = makeSchema();
