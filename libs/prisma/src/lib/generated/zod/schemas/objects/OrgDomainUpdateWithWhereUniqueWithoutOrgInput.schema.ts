import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './OrgDomainWhereUniqueInput.schema';
import { OrgDomainUpdateWithoutOrgInputObjectSchema as OrgDomainUpdateWithoutOrgInputObjectSchema } from './OrgDomainUpdateWithoutOrgInput.schema';
import { OrgDomainUncheckedUpdateWithoutOrgInputObjectSchema as OrgDomainUncheckedUpdateWithoutOrgInputObjectSchema } from './OrgDomainUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgDomainWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrgDomainUpdateWithoutOrgInputObjectSchema), z.lazy(() => OrgDomainUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const OrgDomainUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgDomainUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainUpdateWithWhereUniqueWithoutOrgInput>;
export const OrgDomainUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
