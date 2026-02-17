import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutOwnerInputObjectSchema as GroupUncheckedUpdateManyWithoutOwnerInputObjectSchema } from './GroupUncheckedUpdateManyWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutOwnerInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutOwnerInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutOwnerInput>;
export const GroupUpdateManyWithWhereWithoutOwnerInputObjectZodSchema = makeSchema();
