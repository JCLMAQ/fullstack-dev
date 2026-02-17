import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgDomainScalarWhereInputObjectSchema as OrgDomainScalarWhereInputObjectSchema } from './OrgDomainScalarWhereInput.schema';
import { OrgDomainUpdateManyMutationInputObjectSchema as OrgDomainUpdateManyMutationInputObjectSchema } from './OrgDomainUpdateManyMutationInput.schema';
import { OrgDomainUncheckedUpdateManyWithoutOrgInputObjectSchema as OrgDomainUncheckedUpdateManyWithoutOrgInputObjectSchema } from './OrgDomainUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgDomainScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrgDomainUpdateManyMutationInputObjectSchema), z.lazy(() => OrgDomainUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const OrgDomainUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgDomainUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainUpdateManyWithWhereWithoutOrgInput>;
export const OrgDomainUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();
