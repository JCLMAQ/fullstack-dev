import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutTodosInputObjectSchema as GroupUncheckedUpdateManyWithoutTodosInputObjectSchema } from './GroupUncheckedUpdateManyWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutTodosInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutTodosInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutTodosInput>;
export const GroupUpdateManyWithWhereWithoutTodosInputObjectZodSchema = makeSchema();
