import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueUpdateWithoutSubTagsInputObjectSchema as TagValueUpdateWithoutSubTagsInputObjectSchema } from './TagValueUpdateWithoutSubTagsInput.schema';
import { TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema as TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema } from './TagValueUncheckedUpdateWithoutSubTagsInput.schema';
import { TagValueCreateWithoutSubTagsInputObjectSchema as TagValueCreateWithoutSubTagsInputObjectSchema } from './TagValueCreateWithoutSubTagsInput.schema';
import { TagValueUncheckedCreateWithoutSubTagsInputObjectSchema as TagValueUncheckedCreateWithoutSubTagsInputObjectSchema } from './TagValueUncheckedCreateWithoutSubTagsInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagValueUpdateWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutSubTagsInputObjectSchema)]),
  where: z.lazy(() => TagValueWhereInputObjectSchema).optional()
}).strict();
export const TagValueUpsertWithoutSubTagsInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithoutSubTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithoutSubTagsInput>;
export const TagValueUpsertWithoutSubTagsInputObjectZodSchema = makeSchema();
