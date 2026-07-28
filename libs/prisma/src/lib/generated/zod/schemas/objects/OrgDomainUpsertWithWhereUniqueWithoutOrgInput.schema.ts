import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './OrgDomainWhereUniqueInput.schema';
import { OrgDomainUpdateWithoutOrgInputObjectSchema as OrgDomainUpdateWithoutOrgInputObjectSchema } from './OrgDomainUpdateWithoutOrgInput.schema';
import { OrgDomainUncheckedUpdateWithoutOrgInputObjectSchema as OrgDomainUncheckedUpdateWithoutOrgInputObjectSchema } from './OrgDomainUncheckedUpdateWithoutOrgInput.schema';
import { OrgDomainCreateWithoutOrgInputObjectSchema as OrgDomainCreateWithoutOrgInputObjectSchema } from './OrgDomainCreateWithoutOrgInput.schema';
import { OrgDomainUncheckedCreateWithoutOrgInputObjectSchema as OrgDomainUncheckedCreateWithoutOrgInputObjectSchema } from './OrgDomainUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgDomainWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrgDomainUpdateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => OrgDomainCreateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const OrgDomainUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgDomainUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainUpsertWithWhereUniqueWithoutOrgInput>;
export const OrgDomainUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
