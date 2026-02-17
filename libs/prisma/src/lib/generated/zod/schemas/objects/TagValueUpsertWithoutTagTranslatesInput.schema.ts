import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueUpdateWithoutTagTranslatesInputObjectSchema as TagValueUpdateWithoutTagTranslatesInputObjectSchema } from './TagValueUpdateWithoutTagTranslatesInput.schema';
import { TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema as TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema } from './TagValueUncheckedUpdateWithoutTagTranslatesInput.schema';
import { TagValueCreateWithoutTagTranslatesInputObjectSchema as TagValueCreateWithoutTagTranslatesInputObjectSchema } from './TagValueCreateWithoutTagTranslatesInput.schema';
import { TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema as TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagTranslatesInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagValueUpdateWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema)]),
  where: z.lazy(() => TagValueWhereInputObjectSchema).optional()
}).strict();
export const TagValueUpsertWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithoutTagTranslatesInput>;
export const TagValueUpsertWithoutTagTranslatesInputObjectZodSchema = makeSchema();
