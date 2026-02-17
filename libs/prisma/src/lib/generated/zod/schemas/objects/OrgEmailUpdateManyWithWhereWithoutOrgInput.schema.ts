import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailScalarWhereInputObjectSchema as OrgEmailScalarWhereInputObjectSchema } from './OrgEmailScalarWhereInput.schema';
import { OrgEmailUpdateManyMutationInputObjectSchema as OrgEmailUpdateManyMutationInputObjectSchema } from './OrgEmailUpdateManyMutationInput.schema';
import { OrgEmailUncheckedUpdateManyWithoutOrgInputObjectSchema as OrgEmailUncheckedUpdateManyWithoutOrgInputObjectSchema } from './OrgEmailUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrgEmailUpdateManyMutationInputObjectSchema), z.lazy(() => OrgEmailUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const OrgEmailUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.OrgEmailUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUpdateManyWithWhereWithoutOrgInput>;
export const OrgEmailUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();
