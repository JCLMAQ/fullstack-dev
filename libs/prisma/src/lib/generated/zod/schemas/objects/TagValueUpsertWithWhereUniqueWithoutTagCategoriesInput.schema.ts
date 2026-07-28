import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutTagCategoriesInputObjectSchema as TagValueUpdateWithoutTagCategoriesInputObjectSchema } from './TagValueUpdateWithoutTagCategoriesInput.schema';
import { TagValueUncheckedUpdateWithoutTagCategoriesInputObjectSchema as TagValueUncheckedUpdateWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedUpdateWithoutTagCategoriesInput.schema';
import { TagValueCreateWithoutTagCategoriesInputObjectSchema as TagValueCreateWithoutTagCategoriesInputObjectSchema } from './TagValueCreateWithoutTagCategoriesInput.schema';
import { TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema as TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagValueUpdateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTagCategoriesInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema)])
}).strict();
export const TagValueUpsertWithWhereUniqueWithoutTagCategoriesInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutTagCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutTagCategoriesInput>;
export const TagValueUpsertWithWhereUniqueWithoutTagCategoriesInputObjectZodSchema = makeSchema();
