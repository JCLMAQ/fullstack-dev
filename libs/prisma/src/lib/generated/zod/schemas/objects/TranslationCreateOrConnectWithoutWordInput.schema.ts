import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationCreateWithoutWordInputObjectSchema as TranslationCreateWithoutWordInputObjectSchema } from './TranslationCreateWithoutWordInput.schema';
import { TranslationUncheckedCreateWithoutWordInputObjectSchema as TranslationUncheckedCreateWithoutWordInputObjectSchema } from './TranslationUncheckedCreateWithoutWordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TranslationCreateWithoutWordInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutWordInputObjectSchema)])
}).strict();
export const TranslationCreateOrConnectWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationCreateOrConnectWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateOrConnectWithoutWordInput>;
export const TranslationCreateOrConnectWithoutWordInputObjectZodSchema = makeSchema();
