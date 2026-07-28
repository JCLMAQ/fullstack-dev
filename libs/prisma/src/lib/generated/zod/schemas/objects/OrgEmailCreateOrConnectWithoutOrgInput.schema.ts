import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './OrgEmailWhereUniqueInput.schema';
import { OrgEmailCreateWithoutOrgInputObjectSchema as OrgEmailCreateWithoutOrgInputObjectSchema } from './OrgEmailCreateWithoutOrgInput.schema';
import { OrgEmailUncheckedCreateWithoutOrgInputObjectSchema as OrgEmailUncheckedCreateWithoutOrgInputObjectSchema } from './OrgEmailUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrgEmailCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgEmailUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const OrgEmailCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCreateOrConnectWithoutOrgInput>;
export const OrgEmailCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();
