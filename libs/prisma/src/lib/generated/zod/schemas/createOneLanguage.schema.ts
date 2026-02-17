import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageIncludeObjectSchema as LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageCreateInputObjectSchema as LanguageCreateInputObjectSchema } from './objects/LanguageCreateInput.schema';
import { LanguageUncheckedCreateInputObjectSchema as LanguageUncheckedCreateInputObjectSchema } from './objects/LanguageUncheckedCreateInput.schema';

export const LanguageCreateOneSchema: z.ZodType<Prisma.LanguageCreateArgs> = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), data: z.union([LanguageCreateInputObjectSchema, LanguageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LanguageCreateArgs>;

export const LanguageCreateOneZodSchema = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), data: z.union([LanguageCreateInputObjectSchema, LanguageUncheckedCreateInputObjectSchema]) }).strict();