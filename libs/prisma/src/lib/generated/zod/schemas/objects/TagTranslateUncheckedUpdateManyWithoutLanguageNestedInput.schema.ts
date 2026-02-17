import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateCreateWithoutLanguageInputObjectSchema as TagTranslateCreateWithoutLanguageInputObjectSchema } from './TagTranslateCreateWithoutLanguageInput.schema';
import { TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema as TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedCreateWithoutLanguageInput.schema';
import { TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema as TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema } from './TagTranslateCreateOrConnectWithoutLanguageInput.schema';
import { TagTranslateUpsertWithWhereUniqueWithoutLanguageInputObjectSchema as TagTranslateUpsertWithWhereUniqueWithoutLanguageInputObjectSchema } from './TagTranslateUpsertWithWhereUniqueWithoutLanguageInput.schema';
import { TagTranslateCreateManyLanguageInputEnvelopeObjectSchema as TagTranslateCreateManyLanguageInputEnvelopeObjectSchema } from './TagTranslateCreateManyLanguageInputEnvelope.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateUpdateWithWhereUniqueWithoutLanguageInputObjectSchema as TagTranslateUpdateWithWhereUniqueWithoutLanguageInputObjectSchema } from './TagTranslateUpdateWithWhereUniqueWithoutLanguageInput.schema';
import { TagTranslateUpdateManyWithWhereWithoutLanguageInputObjectSchema as TagTranslateUpdateManyWithWhereWithoutLanguageInputObjectSchema } from './TagTranslateUpdateManyWithWhereWithoutLanguageInput.schema';
import { TagTranslateScalarWhereInputObjectSchema as TagTranslateScalarWhereInputObjectSchema } from './TagTranslateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagTranslateCreateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateCreateWithoutLanguageInputObjectSchema).array(), z.lazy(() => TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateCreateOrConnectWithoutLanguageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagTranslateUpsertWithWhereUniqueWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUpsertWithWhereUniqueWithoutLanguageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagTranslateCreateManyLanguageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagTranslateUpdateWithWhereUniqueWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUpdateWithWhereUniqueWithoutLanguageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagTranslateUpdateManyWithWhereWithoutLanguageInputObjectSchema), z.lazy(() => TagTranslateUpdateManyWithWhereWithoutLanguageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagTranslateScalarWhereInputObjectSchema), z.lazy(() => TagTranslateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema: z.ZodType<Prisma.TagTranslateUncheckedUpdateManyWithoutLanguageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUncheckedUpdateManyWithoutLanguageNestedInput>;
export const TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectZodSchema = makeSchema();
