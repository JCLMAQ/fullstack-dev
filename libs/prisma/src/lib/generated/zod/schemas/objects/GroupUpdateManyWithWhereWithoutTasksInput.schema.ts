import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutTasksInputObjectSchema as GroupUncheckedUpdateManyWithoutTasksInputObjectSchema } from './GroupUncheckedUpdateManyWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutTasksInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutTasksInput>;
export const GroupUpdateManyWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
