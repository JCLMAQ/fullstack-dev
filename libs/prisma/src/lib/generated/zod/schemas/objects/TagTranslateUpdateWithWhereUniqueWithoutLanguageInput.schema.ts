import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateUpdateWithoutLanguageInputObjectSchema as TagTranslateUpdateWithoutLanguageInputObjectSchema } from './TagTranslateUpdateWithoutLanguageInput.schema';
import { TagTranslateUncheckedUpdateWithoutLanguageInputObjectSchema as TagTranslateUncheckedUpdateWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedUpdateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagTranslateUpdateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUncheckedUpdateWithoutLanguageInputObjectSchema)])
}).strict();
export const TagTranslateUpdateWithWhereUniqueWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateUpdateWithWhereUniqueWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUpdateWithWhereUniqueWithoutLanguageInput>;
export const TagTranslateUpdateWithWhereUniqueWithoutLanguageInputObjectZodSchema = makeSchema();
