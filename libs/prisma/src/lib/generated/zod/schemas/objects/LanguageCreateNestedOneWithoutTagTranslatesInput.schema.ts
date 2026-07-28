import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateWithoutTagTranslatesInputObjectSchema as LanguageCreateWithoutTagTranslatesInputObjectSchema } from './LanguageCreateWithoutTagTranslatesInput.schema';
import { LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema as LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './LanguageUncheckedCreateWithoutTagTranslatesInput.schema';
import { LanguageCreateOrConnectWithoutTagTranslatesInputObjectSchema as LanguageCreateOrConnectWithoutTagTranslatesInputObjectSchema } from './LanguageCreateOrConnectWithoutTagTranslatesInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LanguageCreateOrConnectWithoutTagTranslatesInputObjectSchema).optional(),
  connect: z.lazy(() => LanguageWhereUniqueInputObjectSchema).optional()
}).strict();
export const LanguageCreateNestedOneWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageCreateNestedOneWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateNestedOneWithoutTagTranslatesInput>;
export const LanguageCreateNestedOneWithoutTagTranslatesInputObjectZodSchema = makeSchema();
