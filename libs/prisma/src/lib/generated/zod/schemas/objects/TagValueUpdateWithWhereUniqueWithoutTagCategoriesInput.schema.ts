import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutTagCategoriesInputObjectSchema as TagValueUpdateWithoutTagCategoriesInputObjectSchema } from './TagValueUpdateWithoutTagCategoriesInput.schema';
import { TagValueUncheckedUpdateWithoutTagCategoriesInputObjectSchema as TagValueUncheckedUpdateWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedUpdateWithoutTagCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTagCategoriesInputObjectSchema)])
}).strict();
export const TagValueUpdateWithWhereUniqueWithoutTagCategoriesInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutTagCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutTagCategoriesInput>;
export const TagValueUpdateWithWhereUniqueWithoutTagCategoriesInputObjectZodSchema = makeSchema();
