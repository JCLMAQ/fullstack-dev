import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateScalarWhereInputObjectSchema as TagTranslateScalarWhereInputObjectSchema } from './TagTranslateScalarWhereInput.schema';
import { TagTranslateUpdateManyMutationInputObjectSchema as TagTranslateUpdateManyMutationInputObjectSchema } from './TagTranslateUpdateManyMutationInput.schema';
import { TagTranslateUncheckedUpdateManyWithoutLanguageInputObjectSchema as TagTranslateUncheckedUpdateManyWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedUpdateManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagTranslateUpdateManyMutationInputObjectSchema), z.lazy(() => TagTranslateUncheckedUpdateManyWithoutLanguageInputObjectSchema)])
}).strict();
export const TagTranslateUpdateManyWithWhereWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateUpdateManyWithWhereWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUpdateManyWithWhereWithoutLanguageInput>;
export const TagTranslateUpdateManyWithWhereWithoutLanguageInputObjectZodSchema = makeSchema();
