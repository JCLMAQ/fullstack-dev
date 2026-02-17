import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema';
import { OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailCreateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgEmailUseTosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema)])
}).strict();
export const OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateOrConnectWithoutOrgEmailUseTosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateOrConnectWithoutOrgEmailUseTosInput>;
export const OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectZodSchema = makeSchema();
