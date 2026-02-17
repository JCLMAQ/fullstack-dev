import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageIncludeObjectSchema as LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageUpdateInputObjectSchema as LanguageUpdateInputObjectSchema } from './objects/LanguageUpdateInput.schema';
import { LanguageUncheckedUpdateInputObjectSchema as LanguageUncheckedUpdateInputObjectSchema } from './objects/LanguageUncheckedUpdateInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';

export const LanguageUpdateOneSchema: z.ZodType<Prisma.LanguageUpdateArgs> = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), data: z.union([LanguageUpdateInputObjectSchema, LanguageUncheckedUpdateInputObjectSchema]), where: LanguageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LanguageUpdateArgs>;

export const LanguageUpdateOneZodSchema = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), data: z.union([LanguageUpdateInputObjectSchema, LanguageUncheckedUpdateInputObjectSchema]), where: LanguageWhereUniqueInputObjectSchema }).strict();