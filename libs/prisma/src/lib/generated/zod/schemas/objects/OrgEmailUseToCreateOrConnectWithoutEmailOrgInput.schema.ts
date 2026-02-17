import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToCreateWithoutEmailOrgInput.schema';
import { OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema as OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema } from './OrgEmailUseToUncheckedCreateWithoutEmailOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailUseToWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrgEmailUseToCreateWithoutEmailOrgInputObjectSchema), z.lazy(() => OrgEmailUseToUncheckedCreateWithoutEmailOrgInputObjectSchema)])
}).strict();
export const OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToCreateOrConnectWithoutEmailOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToCreateOrConnectWithoutEmailOrgInput>;
export const OrgEmailUseToCreateOrConnectWithoutEmailOrgInputObjectZodSchema = makeSchema();
