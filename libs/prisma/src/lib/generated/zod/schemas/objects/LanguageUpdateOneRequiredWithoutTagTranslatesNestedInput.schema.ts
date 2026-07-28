import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateWithoutTagTranslatesInputObjectSchema as LanguageCreateWithoutTagTranslatesInputObjectSchema } from './LanguageCreateWithoutTagTranslatesInput.schema';
import { LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema as LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './LanguageUncheckedCreateWithoutTagTranslatesInput.schema';
import { LanguageCreateOrConnectWithoutTagTranslatesInputObjectSchema as LanguageCreateOrConnectWithoutTagTranslatesInputObjectSchema } from './LanguageCreateOrConnectWithoutTagTranslatesInput.schema';
import { LanguageUpsertWithoutTagTranslatesInputObjectSchema as LanguageUpsertWithoutTagTranslatesInputObjectSchema } from './LanguageUpsertWithoutTagTranslatesInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema as LanguageUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema } from './LanguageUpdateToOneWithWhereWithoutTagTranslatesInput.schema';
import { LanguageUpdateWithoutTagTranslatesInputObjectSchema as LanguageUpdateWithoutTagTranslatesInputObjectSchema } from './LanguageUpdateWithoutTagTranslatesInput.schema';
import { LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema as LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema } from './LanguageUncheckedUpdateWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LanguageCreateOrConnectWithoutTagTranslatesInputObjectSchema).optional(),
  upsert: z.lazy(() => LanguageUpsertWithoutTagTranslatesInputObjectSchema).optional(),
  connect: z.lazy(() => LanguageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LanguageUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUpdateWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema)]).optional()
}).strict();
export const LanguageUpdateOneRequiredWithoutTagTranslatesNestedInputObjectSchema: z.ZodType<Prisma.LanguageUpdateOneRequiredWithoutTagTranslatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateOneRequiredWithoutTagTranslatesNestedInput>;
export const LanguageUpdateOneRequiredWithoutTagTranslatesNestedInputObjectZodSchema = makeSchema();
