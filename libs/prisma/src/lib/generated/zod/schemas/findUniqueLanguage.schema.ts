import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageIncludeObjectSchema as LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';

export const LanguageFindUniqueSchema: z.ZodType<Prisma.LanguageFindUniqueArgs> = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), where: LanguageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LanguageFindUniqueArgs>;

export const LanguageFindUniqueZodSchema = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), where: LanguageWhereUniqueInputObjectSchema }).strict();