import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutTodosInputObjectSchema as TagValueUpdateWithoutTodosInputObjectSchema } from './TagValueUpdateWithoutTodosInput.schema';
import { TagValueUncheckedUpdateWithoutTodosInputObjectSchema as TagValueUncheckedUpdateWithoutTodosInputObjectSchema } from './TagValueUncheckedUpdateWithoutTodosInput.schema';
import { TagValueCreateWithoutTodosInputObjectSchema as TagValueCreateWithoutTodosInputObjectSchema } from './TagValueCreateWithoutTodosInput.schema';
import { TagValueUncheckedCreateWithoutTodosInputObjectSchema as TagValueUncheckedCreateWithoutTodosInputObjectSchema } from './TagValueUncheckedCreateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagValueUpdateWithoutTodosInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTodosInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutTodosInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTodosInputObjectSchema)])
}).strict();
export const TagValueUpsertWithWhereUniqueWithoutTodosInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutTodosInput>;
export const TagValueUpsertWithWhereUniqueWithoutTodosInputObjectZodSchema = makeSchema();
