import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateCreateWithoutTagValueInputObjectSchema as TagTranslateCreateWithoutTagValueInputObjectSchema } from './TagTranslateCreateWithoutTagValueInput.schema';
import { TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema as TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedCreateWithoutTagValueInput.schema';
import { TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema as TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema } from './TagTranslateCreateOrConnectWithoutTagValueInput.schema';
import { TagTranslateUpsertWithWhereUniqueWithoutTagValueInputObjectSchema as TagTranslateUpsertWithWhereUniqueWithoutTagValueInputObjectSchema } from './TagTranslateUpsertWithWhereUniqueWithoutTagValueInput.schema';
import { TagTranslateCreateManyTagValueInputEnvelopeObjectSchema as TagTranslateCreateManyTagValueInputEnvelopeObjectSchema } from './TagTranslateCreateManyTagValueInputEnvelope.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateUpdateWithWhereUniqueWithoutTagValueInputObjectSchema as TagTranslateUpdateWithWhereUniqueWithoutTagValueInputObjectSchema } from './TagTranslateUpdateWithWhereUniqueWithoutTagValueInput.schema';
import { TagTranslateUpdateManyWithWhereWithoutTagValueInputObjectSchema as TagTranslateUpdateManyWithWhereWithoutTagValueInputObjectSchema } from './TagTranslateUpdateManyWithWhereWithoutTagValueInput.schema';
import { TagTranslateScalarWhereInputObjectSchema as TagTranslateScalarWhereInputObjectSchema } from './TagTranslateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagTranslateCreateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateCreateWithoutTagValueInputObjectSchema).array(), z.lazy(() => TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagTranslateUpsertWithWhereUniqueWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUpsertWithWhereUniqueWithoutTagValueInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagTranslateCreateManyTagValueInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagTranslateUpdateWithWhereUniqueWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUpdateWithWhereUniqueWithoutTagValueInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagTranslateUpdateManyWithWhereWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUpdateManyWithWhereWithoutTagValueInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagTranslateScalarWhereInputObjectSchema), z.lazy(() => TagTranslateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagTranslateUncheckedUpdateManyWithoutTagValueNestedInputObjectSchema: z.ZodType<Prisma.TagTranslateUncheckedUpdateManyWithoutTagValueNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUncheckedUpdateManyWithoutTagValueNestedInput>;
export const TagTranslateUncheckedUpdateManyWithoutTagValueNestedInputObjectZodSchema = makeSchema();
