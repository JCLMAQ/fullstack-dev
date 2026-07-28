import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './objects/TranslationSelect.schema';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './objects/TranslationInclude.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './objects/TranslationWhereUniqueInput.schema';

export const TranslationDeleteOneSchema: z.ZodType<Prisma.TranslationDeleteArgs> = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), where: TranslationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TranslationDeleteArgs>;

export const TranslationDeleteOneZodSchema = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), where: TranslationWhereUniqueInputObjectSchema }).strict();