import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './TagTranslateWhereUniqueInput.schema';
import { TagTranslateCreateWithoutTagValueInputObjectSchema as TagTranslateCreateWithoutTagValueInputObjectSchema } from './TagTranslateCreateWithoutTagValueInput.schema';
import { TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema as TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedCreateWithoutTagValueInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagTranslateCreateWithoutTagValueInputObjectSchema), z.lazy(() => TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema)])
}).strict();
export const TagTranslateCreateOrConnectWithoutTagValueInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateOrConnectWithoutTagValueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateOrConnectWithoutTagValueInput>;
export const TagTranslateCreateOrConnectWithoutTagValueInputObjectZodSchema = makeSchema();
