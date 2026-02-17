import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateCreateWithoutLanguageInputObjectSchema as TagTranslateCreateWithoutLanguageInputObjectSchema } from './TagTranslateCreateWithoutLanguageInput.schema';
import { TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema as TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedCreateWithoutLanguageInput.schema';
import { TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema as TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema } from './TagTranslateCreateOrConnectWithoutLanguageInput.schema';
import { TagTranslateCreateManyLanguageInputEnvelopeObjectSchema as TagTranslateCreateManyLanguageInputEnvelopeObjectSchema } from './TagTranslateCreateManyLanguageInputEnvelope.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagTranslateCreateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateCreateWithoutLanguageInputObjectSchema).array(), z.lazy(() => TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagTranslateCreateManyLanguageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateNestedManyWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateNestedManyWithoutLanguageInput>;
export const TagTranslateCreateNestedManyWithoutLanguageInputObjectZodSchema = makeSchema();
