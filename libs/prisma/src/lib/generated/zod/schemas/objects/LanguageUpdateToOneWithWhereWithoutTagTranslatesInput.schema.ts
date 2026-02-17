import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema';
import { LanguageUpdateWithoutTagTranslatesInputObjectSchema as LanguageUpdateWithoutTagTranslatesInputObjectSchema } from './LanguageUpdateWithoutTagTranslatesInput.schema';
import { LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema as LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema } from './LanguageUncheckedUpdateWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LanguageUpdateWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema)])
}).strict();
export const LanguageUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutTagTranslatesInput>;
export const LanguageUpdateToOneWithWhereWithoutTagTranslatesInputObjectZodSchema = makeSchema();
