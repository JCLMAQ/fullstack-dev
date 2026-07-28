import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { WordIncludeObjectSchema as WordIncludeObjectSchema } from './objects/WordInclude.schema';
import { WordOrderByWithRelationInputObjectSchema as WordOrderByWithRelationInputObjectSchema } from './objects/WordOrderByWithRelationInput.schema';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './objects/WordWhereInput.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './objects/WordWhereUniqueInput.schema';
import { WordScalarFieldEnumSchema } from './enums/WordScalarFieldEnum.schema';
import { TranslationFindManySchema } from './findManyTranslation.schema';
import { WordCountOutputTypeArgsObjectSchema as WordCountOutputTypeArgsObjectSchema } from './objects/WordCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WordFindFirstSelectSchema: z.ZodType<Prisma.WordSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    slug: z.boolean().optional(),
    type: z.boolean().optional(),
    translations: z.union([z.boolean(), z.lazy(() => TranslationFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => WordCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.WordSelect>;

export const WordFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    slug: z.boolean().optional(),
    type: z.boolean().optional(),
    translations: z.union([z.boolean(), z.lazy(() => TranslationFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => WordCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const WordFindFirstSchema: z.ZodType<Prisma.WordFindFirstArgs> = z.object({ select: WordFindFirstSelectSchema.optional(), include: z.lazy(() => WordIncludeObjectSchema.optional()), orderBy: z.union([WordOrderByWithRelationInputObjectSchema, WordOrderByWithRelationInputObjectSchema.array()]).optional(), where: WordWhereInputObjectSchema.optional(), cursor: WordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WordScalarFieldEnumSchema, WordScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WordFindFirstArgs>;

export const WordFindFirstZodSchema = z.object({ select: WordFindFirstSelectSchema.optional(), include: z.lazy(() => WordIncludeObjectSchema.optional()), orderBy: z.union([WordOrderByWithRelationInputObjectSchema, WordOrderByWithRelationInputObjectSchema.array()]).optional(), where: WordWhereInputObjectSchema.optional(), cursor: WordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WordScalarFieldEnumSchema, WordScalarFieldEnumSchema.array()]).optional() }).strict();