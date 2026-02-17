import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './objects/TranslationSelect.schema';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './objects/TranslationInclude.schema';
import { TranslationUpdateInputObjectSchema as TranslationUpdateInputObjectSchema } from './objects/TranslationUpdateInput.schema';
import { TranslationUncheckedUpdateInputObjectSchema as TranslationUncheckedUpdateInputObjectSchema } from './objects/TranslationUncheckedUpdateInput.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './objects/TranslationWhereUniqueInput.schema';

export const TranslationUpdateOneSchema: z.ZodType<Prisma.TranslationUpdateArgs> = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), data: z.union([TranslationUpdateInputObjectSchema, TranslationUncheckedUpdateInputObjectSchema]), where: TranslationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TranslationUpdateArgs>;

export const TranslationUpdateOneZodSchema = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), data: z.union([TranslationUpdateInputObjectSchema, TranslationUncheckedUpdateInputObjectSchema]), where: TranslationWhereUniqueInputObjectSchema }).strict();