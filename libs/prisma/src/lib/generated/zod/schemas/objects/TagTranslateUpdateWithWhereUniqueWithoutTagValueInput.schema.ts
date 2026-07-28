import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateUpdateWithoutTagValueInputObjectSchema as TagTranslateUpdateWithoutTagValueInputObjectSchema } from './TagTranslateUpdateWithoutTagValueInput.schema';
import { TagTranslateUncheckedUpdateWithoutTagValueInputObjectSchema as TagTranslateUncheckedUpdateWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedUpdateWithoutTagValueInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagTranslateUpdateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUncheckedUpdateWithoutTagValueInputObjectSchema)])
}).strict();
export const TagTranslateUpdateWithWhereUniqueWithoutTagValueInputObjectSchema: z.ZodType<Prisma.TagTranslateUpdateWithWhereUniqueWithoutTagValueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUpdateWithWhereUniqueWithoutTagValueInput>;
export const TagTranslateUpdateWithWhereUniqueWithoutTagValueInputObjectZodSchema = makeSchema();
