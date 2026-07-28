import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateCreateWithoutTagValueInputObjectSchema as TagTranslateCreateWithoutTagValueInputObjectSchema } from './TagTranslateCreateWithoutTagValueInput.schema';
import { TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema as TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedCreateWithoutTagValueInput.schema';
import { TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema as TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema } from './TagTranslateCreateOrConnectWithoutTagValueInput.schema';
import { TagTranslateCreateManyTagValueInputEnvelopeObjectSchema as TagTranslateCreateManyTagValueInputEnvelopeObjectSchema } from './TagTranslateCreateManyTagValueInputEnvelope.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagTranslateCreateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateCreateWithoutTagValueInputObjectSchema).array(), z.lazy(() => TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagTranslateCreateManyTagValueInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TagTranslateWhereUniqueInputObjectSchema), z.lazy(() => TagTranslateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagTranslateUncheckedCreateNestedManyWithoutTagValueInputObjectSchema: z.ZodType<Prisma.TagTranslateUncheckedCreateNestedManyWithoutTagValueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUncheckedCreateNestedManyWithoutTagValueInput>;
export const TagTranslateUncheckedCreateNestedManyWithoutTagValueInputObjectZodSchema = makeSchema();
