import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TranslationCreateWithoutLanguageInputObjectSchema as TranslationCreateWithoutLanguageInputObjectSchema } from './TranslationCreateWithoutLanguageInput.schema';
import { TranslationUncheckedCreateWithoutLanguageInputObjectSchema as TranslationUncheckedCreateWithoutLanguageInputObjectSchema } from './TranslationUncheckedCreateWithoutLanguageInput.schema';
import { TranslationCreateOrConnectWithoutLanguageInputObjectSchema as TranslationCreateOrConnectWithoutLanguageInputObjectSchema } from './TranslationCreateOrConnectWithoutLanguageInput.schema';
import { TranslationUpsertWithWhereUniqueWithoutLanguageInputObjectSchema as TranslationUpsertWithWhereUniqueWithoutLanguageInputObjectSchema } from './TranslationUpsertWithWhereUniqueWithoutLanguageInput.schema';
import { TranslationCreateManyLanguageInputEnvelopeObjectSchema as TranslationCreateManyLanguageInputEnvelopeObjectSchema } from './TranslationCreateManyLanguageInputEnvelope.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationUpdateWithWhereUniqueWithoutLanguageInputObjectSchema as TranslationUpdateWithWhereUniqueWithoutLanguageInputObjectSchema } from './TranslationUpdateWithWhereUniqueWithoutLanguageInput.schema';
import { TranslationUpdateManyWithWhereWithoutLanguageInputObjectSchema as TranslationUpdateManyWithWhereWithoutLanguageInputObjectSchema } from './TranslationUpdateManyWithWhereWithoutLanguageInput.schema';
import { TranslationScalarWhereInputObjectSchema as TranslationScalarWhereInputObjectSchema } from './TranslationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TranslationCreateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationCreateWithoutLanguageInputObjectSchema).array(), z.lazy(() => TranslationUncheckedCreateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutLanguageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TranslationCreateOrConnectWithoutLanguageInputObjectSchema), z.lazy(() => TranslationCreateOrConnectWithoutLanguageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TranslationUpsertWithWhereUniqueWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUpsertWithWhereUniqueWithoutLanguageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TranslationCreateManyLanguageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TranslationUpdateWithWhereUniqueWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUpdateWithWhereUniqueWithoutLanguageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TranslationUpdateManyWithWhereWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUpdateManyWithWhereWithoutLanguageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TranslationScalarWhereInputObjectSchema), z.lazy(() => TranslationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TranslationUpdateManyWithoutLanguageNestedInputObjectSchema: z.ZodType<Prisma.TranslationUpdateManyWithoutLanguageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateManyWithoutLanguageNestedInput>;
export const TranslationUpdateManyWithoutLanguageNestedInputObjectZodSchema = makeSchema();
