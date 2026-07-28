import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutTodosInputObjectSchema as TagValueUpdateWithoutTodosInputObjectSchema } from './TagValueUpdateWithoutTodosInput.schema';
import { TagValueUncheckedUpdateWithoutTodosInputObjectSchema as TagValueUncheckedUpdateWithoutTodosInputObjectSchema } from './TagValueUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateWithoutTodosInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTodosInputObjectSchema)])
}).strict();
export const TagValueUpdateWithWhereUniqueWithoutTodosInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutTodosInput>;
export const TagValueUpdateWithWhereUniqueWithoutTodosInputObjectZodSchema = makeSchema();
