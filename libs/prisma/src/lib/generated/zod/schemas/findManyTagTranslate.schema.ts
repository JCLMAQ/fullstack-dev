import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './objects/TagTranslateInclude.schema';
import { TagTranslateOrderByWithRelationInputObjectSchema as TagTranslateOrderByWithRelationInputObjectSchema } from './objects/TagTranslateOrderByWithRelationInput.schema';
import { TagTranslateWhereInputObjectSchema as TagTranslateWhereInputObjectSchema } from './objects/TagTranslateWhereInput.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './objects/TagTranslateWhereUniqueInput.schema';
import { TagTranslateScalarFieldEnumSchema } from './enums/TagTranslateScalarFieldEnum.schema';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './objects/LanguageArgs.schema';
import { TagValueArgsObjectSchema as TagValueArgsObjectSchema } from './objects/TagValueArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagTranslateFindManySelectSchema: z.ZodType<Prisma.TagTranslateSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional(),
    languageId: z.boolean().optional(),
    translation: z.boolean().optional(),
    tagId: z.boolean().optional(),
    tagValue: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional(),
    description: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TagTranslateSelect>;

export const TagTranslateFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional(),
    languageId: z.boolean().optional(),
    translation: z.boolean().optional(),
    tagId: z.boolean().optional(),
    tagValue: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional(),
    description: z.boolean().optional()
  }).strict();

export const TagTranslateFindManySchema: z.ZodType<Prisma.TagTranslateFindManyArgs> = z.object({ select: TagTranslateFindManySelectSchema.optional(), include: z.lazy(() => TagTranslateIncludeObjectSchema.optional()), orderBy: z.union([TagTranslateOrderByWithRelationInputObjectSchema, TagTranslateOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagTranslateWhereInputObjectSchema.optional(), cursor: TagTranslateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagTranslateScalarFieldEnumSchema, TagTranslateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagTranslateFindManyArgs>;

export const TagTranslateFindManyZodSchema = z.object({ select: TagTranslateFindManySelectSchema.optional(), include: z.lazy(() => TagTranslateIncludeObjectSchema.optional()), orderBy: z.union([TagTranslateOrderByWithRelationInputObjectSchema, TagTranslateOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagTranslateWhereInputObjectSchema.optional(), cursor: TagTranslateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagTranslateScalarFieldEnumSchema, TagTranslateScalarFieldEnumSchema.array()]).optional() }).strict();