import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './objects/TranslationInclude.schema';
import { TranslationOrderByWithRelationInputObjectSchema as TranslationOrderByWithRelationInputObjectSchema } from './objects/TranslationOrderByWithRelationInput.schema';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './objects/TranslationWhereInput.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './objects/TranslationWhereUniqueInput.schema';
import { TranslationScalarFieldEnumSchema } from './enums/TranslationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TranslationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TranslationSelect> = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    definition: z.boolean().optional(),
    wordId: z.boolean().optional(),
    word: z.boolean().optional(),
    languageId: z.boolean().optional(),
    language: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TranslationSelect>;

export const TranslationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    definition: z.boolean().optional(),
    wordId: z.boolean().optional(),
    word: z.boolean().optional(),
    languageId: z.boolean().optional(),
    language: z.boolean().optional()
  }).strict();

export const TranslationFindFirstOrThrowSchema: z.ZodType<Prisma.TranslationFindFirstOrThrowArgs> = z.object({ select: TranslationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TranslationIncludeObjectSchema.optional()), orderBy: z.union([TranslationOrderByWithRelationInputObjectSchema, TranslationOrderByWithRelationInputObjectSchema.array()]).optional(), where: TranslationWhereInputObjectSchema.optional(), cursor: TranslationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TranslationScalarFieldEnumSchema, TranslationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TranslationFindFirstOrThrowArgs>;

export const TranslationFindFirstOrThrowZodSchema = z.object({ select: TranslationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TranslationIncludeObjectSchema.optional()), orderBy: z.union([TranslationOrderByWithRelationInputObjectSchema, TranslationOrderByWithRelationInputObjectSchema.array()]).optional(), where: TranslationWhereInputObjectSchema.optional(), cursor: TranslationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TranslationScalarFieldEnumSchema, TranslationScalarFieldEnumSchema.array()]).optional() }).strict();