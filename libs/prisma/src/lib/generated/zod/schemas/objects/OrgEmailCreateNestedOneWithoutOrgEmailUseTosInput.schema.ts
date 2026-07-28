import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailCreateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgEmailUseTosInput.schema';
import { OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectSchema as OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectSchema } from './OrgEmailCreateOrConnectWithoutOrgEmailUseTosInput.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgEmailUseTosInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgEmailUseTosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrgEmailCreateOrConnectWithoutOrgEmailUseTosInputObjectSchema).optional(),
  connect: z.lazy(() => OrgEmailWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrgEmailCreateNestedOneWithoutOrgEmailUseTosInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateNestedOneWithoutOrgEmailUseTosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateNestedOneWithoutOrgEmailUseTosInput>;
export const OrgEmailCreateNestedOneWithoutOrgEmailUseTosInputObjectZodSchema = makeSchema();
