import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateUpdateWithoutLanguageInputObjectSchema as TagTranslateUpdateWithoutLanguageInputObjectSchema } from './TagTranslateUpdateWithoutLanguageInput.schema';
import { TagTranslateUncheckedUpdateWithoutLanguageInputObjectSchema as TagTranslateUncheckedUpdateWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedUpdateWithoutLanguageInput.schema';
import { TagTranslateCreateWithoutLanguageInputObjectSchema as TagTranslateCreateWithoutLanguageInputObjectSchema } from './TagTranslateCreateWithoutLanguageInput.schema';
import { TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema as TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedCreateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagTranslateUpdateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUncheckedUpdateWithoutLanguageInputObjectSchema)]),
  create: z.union([z.lazy(() => TagTranslateCreateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema)])
}).strict();
export const TagTranslateUpsertWithWhereUniqueWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateUpsertWithWhereUniqueWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUpsertWithWhereUniqueWithoutLanguageInput>;
export const TagTranslateUpsertWithWhereUniqueWithoutLanguageInputObjectZodSchema = makeSchema();
