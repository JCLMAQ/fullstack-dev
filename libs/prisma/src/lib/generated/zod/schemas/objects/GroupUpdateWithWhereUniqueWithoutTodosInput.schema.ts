import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutTodosInputObjectSchema as GroupUpdateWithoutTodosInputObjectSchema } from './GroupUpdateWithoutTodosInput.schema';
import { GroupUncheckedUpdateWithoutTodosInputObjectSchema as GroupUncheckedUpdateWithoutTodosInputObjectSchema } from './GroupUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutTodosInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutTodosInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutTodosInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutTodosInput>;
export const GroupUpdateWithWhereUniqueWithoutTodosInputObjectZodSchema = makeSchema();
