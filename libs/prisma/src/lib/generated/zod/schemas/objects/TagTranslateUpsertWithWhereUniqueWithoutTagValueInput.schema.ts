import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateUpdateWithoutTagValueInputObjectSchema as TagTranslateUpdateWithoutTagValueInputObjectSchema } from './TagTranslateUpdateWithoutTagValueInput.schema';
import { TagTranslateUncheckedUpdateWithoutTagValueInputObjectSchema as TagTranslateUncheckedUpdateWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedUpdateWithoutTagValueInput.schema';
import { TagTranslateCreateWithoutTagValueInputObjectSchema as TagTranslateCreateWithoutTagValueInputObjectSchema } from './TagTranslateCreateWithoutTagValueInput.schema';
import { TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema as TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedCreateWithoutTagValueInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagTranslateUpdateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUncheckedUpdateWithoutTagValueInputObjectSchema)]),
  create: z.union([z.lazy(() => TagTranslateCreateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema)])
}).strict();
export const TagTranslateUpsertWithWhereUniqueWithoutTagValueInputObjectSchema: z.ZodType<Prisma.TagTranslateUpsertWithWhereUniqueWithoutTagValueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUpsertWithWhereUniqueWithoutTagValueInput>;
export const TagTranslateUpsertWithWhereUniqueWithoutTagValueInputObjectZodSchema = makeSchema();
