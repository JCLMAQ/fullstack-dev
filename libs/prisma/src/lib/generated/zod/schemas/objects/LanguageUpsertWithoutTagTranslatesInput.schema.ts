import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageUpdateWithoutTagTranslatesInputObjectSchema as LanguageUpdateWithoutTagTranslatesInputObjectSchema } from './LanguageUpdateWithoutTagTranslatesInput.schema';
import { LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema as LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema } from './LanguageUncheckedUpdateWithoutTagTranslatesInput.schema';
import { LanguageCreateWithoutTagTranslatesInputObjectSchema as LanguageCreateWithoutTagTranslatesInputObjectSchema } from './LanguageCreateWithoutTagTranslatesInput.schema';
import { LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema as LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './LanguageUncheckedCreateWithoutTagTranslatesInput.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LanguageUpdateWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema)]),
  create: z.union([z.lazy(() => LanguageCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema)]),
  where: z.lazy(() => LanguageWhereInputObjectSchema).optional()
}).strict();
export const LanguageUpsertWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageUpsertWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpsertWithoutTagTranslatesInput>;
export const LanguageUpsertWithoutTagTranslatesInputObjectZodSchema = makeSchema();
