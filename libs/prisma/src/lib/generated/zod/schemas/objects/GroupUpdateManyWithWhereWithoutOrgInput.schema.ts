import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutOrgInputObjectSchema as GroupUncheckedUpdateManyWithoutOrgInputObjectSchema } from './GroupUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutOrgInput>;
export const GroupUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();
