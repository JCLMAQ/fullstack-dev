import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './objects/TranslationInclude.schema';
import { TranslationOrderByWithRelationInputObjectSchema as TranslationOrderByWithRelationInputObjectSchema } from './objects/TranslationOrderByWithRelationInput.schema';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './objects/TranslationWhereInput.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './objects/TranslationWhereUniqueInput.schema';
import { TranslationScalarFieldEnumSchema } from './enums/TranslationScalarFieldEnum.schema';
import { WordArgsObjectSchema as WordArgsObjectSchema } from './objects/WordArgs.schema';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './objects/LanguageArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TranslationFindManySelectSchema: z.ZodType<Prisma.TranslationSelect> = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    definition: z.boolean().optional(),
    wordId: z.boolean().optional(),
    word: z.union([z.boolean(), z.lazy(() => WordArgsObjectSchema)]).optional(),
    languageId: z.boolean().optional(),
    language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.TranslationSelect>;

export const TranslationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    definition: z.boolean().optional(),
    wordId: z.boolean().optional(),
    word: z.union([z.boolean(), z.lazy(() => WordArgsObjectSchema)]).optional(),
    languageId: z.boolean().optional(),
    language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional()
  }).strict();

export const TranslationFindManySchema: z.ZodType<Prisma.TranslationFindManyArgs> = z.object({ select: TranslationFindManySelectSchema.optional(), include: z.lazy(() => TranslationIncludeObjectSchema.optional()), orderBy: z.union([TranslationOrderByWithRelationInputObjectSchema, TranslationOrderByWithRelationInputObjectSchema.array()]).optional(), where: TranslationWhereInputObjectSchema.optional(), cursor: TranslationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TranslationScalarFieldEnumSchema, TranslationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TranslationFindManyArgs>;

export const TranslationFindManyZodSchema = z.object({ select: TranslationFindManySelectSchema.optional(), include: z.lazy(() => TranslationIncludeObjectSchema.optional()), orderBy: z.union([TranslationOrderByWithRelationInputObjectSchema, TranslationOrderByWithRelationInputObjectSchema.array()]).optional(), where: TranslationWhereInputObjectSchema.optional(), cursor: TranslationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TranslationScalarFieldEnumSchema, TranslationScalarFieldEnumSchema.array()]).optional() }).strict();