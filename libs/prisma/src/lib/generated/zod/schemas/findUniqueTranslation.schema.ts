import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './objects/TranslationSelect.schema';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './objects/TranslationInclude.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './objects/TranslationWhereUniqueInput.schema';

export const TranslationFindUniqueSchema: z.ZodType<Prisma.TranslationFindUniqueArgs> = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), where: TranslationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TranslationFindUniqueArgs>;

export const TranslationFindUniqueZodSchema = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), where: TranslationWhereUniqueInputObjectSchema }).strict();