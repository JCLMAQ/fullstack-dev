import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './objects/TranslationSelect.schema';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './objects/TranslationInclude.schema';
import { TranslationCreateInputObjectSchema as TranslationCreateInputObjectSchema } from './objects/TranslationCreateInput.schema';
import { TranslationUncheckedCreateInputObjectSchema as TranslationUncheckedCreateInputObjectSchema } from './objects/TranslationUncheckedCreateInput.schema';

export const TranslationCreateOneSchema: z.ZodType<Prisma.TranslationCreateArgs> = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), data: z.union([TranslationCreateInputObjectSchema, TranslationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TranslationCreateArgs>;

export const TranslationCreateOneZodSchema = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), data: z.union([TranslationCreateInputObjectSchema, TranslationUncheckedCreateInputObjectSchema]) }).strict();