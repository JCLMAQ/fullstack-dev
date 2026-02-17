import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateScalarWhereInputObjectSchema as TagTranslateScalarWhereInputObjectSchema } from './TagTranslateScalarWhereInput.schema';
import { TagTranslateUpdateManyMutationInputObjectSchema as TagTranslateUpdateManyMutationInputObjectSchema } from './TagTranslateUpdateManyMutationInput.schema';
import { TagTranslateUncheckedUpdateManyWithoutTagValueInputObjectSchema as TagTranslateUncheckedUpdateManyWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedUpdateManyWithoutTagValueInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagTranslateUpdateManyMutationInputObjectSchema), z.lazy(() => TagTranslateUncheckedUpdateManyWithoutTagValueInputObjectSchema)])
}).strict();
export const TagTranslateUpdateManyWithWhereWithoutTagValueInputObjectSchema: z.ZodType<Prisma.TagTranslateUpdateManyWithWhereWithoutTagValueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUpdateManyWithWhereWithoutTagValueInput>;
export const TagTranslateUpdateManyWithWhereWithoutTagValueInputObjectZodSchema = makeSchema();
