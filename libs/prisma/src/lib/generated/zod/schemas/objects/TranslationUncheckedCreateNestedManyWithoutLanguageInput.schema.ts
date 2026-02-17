import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationCreateWithoutLanguageInputObjectSchema as TranslationCreateWithoutLanguageInputObjectSchema } from './TranslationCreateWithoutLanguageInput.schema';
import { TranslationUncheckedCreateWithoutLanguageInputObjectSchema as TranslationUncheckedCreateWithoutLanguageInputObjectSchema } from './TranslationUncheckedCreateWithoutLanguageInput.schema';
import { TranslationCreateOrConnectWithoutLanguageInputObjectSchema as TranslationCreateOrConnectWithoutLanguageInputObjectSchema } from './TranslationCreateOrConnectWithoutLanguageInput.schema';
import { TranslationCreateManyLanguageInputEnvelopeObjectSchema as TranslationCreateManyLanguageInputEnvelopeObjectSchema } from './TranslationCreateManyLanguageInputEnvelope.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TranslationCreateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationCreateWithoutLanguageInputObjectSchema).array(), z.lazy(() => TranslationUncheckedCreateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutLanguageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TranslationCreateOrConnectWithoutLanguageInputObjectSchema), z.lazy(() => TranslationCreateOrConnectWithoutLanguageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TranslationCreateManyLanguageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationUncheckedCreateNestedManyWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUncheckedCreateNestedManyWithoutLanguageInput>;
export const TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectZodSchema = makeSchema();
