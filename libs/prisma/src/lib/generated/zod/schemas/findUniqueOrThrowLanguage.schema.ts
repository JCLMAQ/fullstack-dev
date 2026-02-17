import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageIncludeObjectSchema as LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';

export const LanguageFindUniqueOrThrowSchema: z.ZodType<Prisma.LanguageFindUniqueOrThrowArgs> = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), where: LanguageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LanguageFindUniqueOrThrowArgs>;

export const LanguageFindUniqueOrThrowZodSchema = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), where: LanguageWhereUniqueInputObjectSchema }).strict();