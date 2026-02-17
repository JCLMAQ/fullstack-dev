import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutTagsInputObjectSchema as GroupUncheckedUpdateManyWithoutTagsInputObjectSchema } from './GroupUncheckedUpdateManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutTagsInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutTagsInput>;
export const GroupUpdateManyWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
