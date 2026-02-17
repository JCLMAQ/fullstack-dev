import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateCreateWithoutLanguageInputObjectSchema as TagTranslateCreateWithoutLanguageInputObjectSchema } from './TagTranslateCreateWithoutLanguageInput.schema';
import { TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema as TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedCreateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagTranslateCreateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema)])
}).strict();
export const TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateOrConnectWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateOrConnectWithoutLanguageInput>;
export const TagTranslateCreateOrConnectWithoutLanguageInputObjectZodSchema = makeSchema();
