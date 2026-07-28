import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageCreateWithoutTagTranslatesInputObjectSchema as LanguageCreateWithoutTagTranslatesInputObjectSchema } from './LanguageCreateWithoutTagTranslatesInput.schema';
import { LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema as LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './LanguageUncheckedCreateWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LanguageCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema)])
}).strict();
export const LanguageCreateOrConnectWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageCreateOrConnectWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateOrConnectWithoutTagTranslatesInput>;
export const LanguageCreateOrConnectWithoutTagTranslatesInputObjectZodSchema = makeSchema();
