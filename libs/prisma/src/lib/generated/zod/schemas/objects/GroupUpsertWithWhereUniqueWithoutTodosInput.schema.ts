import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutTodosInputObjectSchema as GroupUpdateWithoutTodosInputObjectSchema } from './GroupUpdateWithoutTodosInput.schema';
import { GroupUncheckedUpdateWithoutTodosInputObjectSchema as GroupUncheckedUpdateWithoutTodosInputObjectSchema } from './GroupUncheckedUpdateWithoutTodosInput.schema';
import { GroupCreateWithoutTodosInputObjectSchema as GroupCreateWithoutTodosInputObjectSchema } from './GroupCreateWithoutTodosInput.schema';
import { GroupUncheckedCreateWithoutTodosInputObjectSchema as GroupUncheckedCreateWithoutTodosInputObjectSchema } from './GroupUncheckedCreateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutTodosInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutTodosInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutTodosInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTodosInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutTodosInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutTodosInput>;
export const GroupUpsertWithWhereUniqueWithoutTodosInputObjectZodSchema = makeSchema();
