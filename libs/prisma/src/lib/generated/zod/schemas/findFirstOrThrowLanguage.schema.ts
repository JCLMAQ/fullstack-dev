import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { LanguageIncludeObjectSchema as LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageOrderByWithRelationInputObjectSchema as LanguageOrderByWithRelationInputObjectSchema } from './objects/LanguageOrderByWithRelationInput.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';
import { LanguageScalarFieldEnumSchema } from './enums/LanguageScalarFieldEnum.schema';
import { TranslationFindManySchema } from './findManyTranslation.schema';
import { UserFindManySchema } from './findManyUser.schema';
import { TagTranslateFindManySchema } from './findManyTagTranslate.schema';
import { LanguageCountOutputTypeArgsObjectSchema as LanguageCountOutputTypeArgsObjectSchema } from './objects/LanguageCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LanguageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.LanguageSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    translations: z.union([z.boolean(), z.lazy(() => TranslationFindManySchema)]).optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    tagTranslates: z.union([z.boolean(), z.lazy(() => TagTranslateFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.LanguageSelect>;

export const LanguageFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    translations: z.union([z.boolean(), z.lazy(() => TranslationFindManySchema)]).optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    tagTranslates: z.union([z.boolean(), z.lazy(() => TagTranslateFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const LanguageFindFirstOrThrowSchema: z.ZodType<Prisma.LanguageFindFirstOrThrowArgs> = z.object({ select: LanguageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LanguageIncludeObjectSchema.optional()), orderBy: z.union([LanguageOrderByWithRelationInputObjectSchema, LanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageWhereInputObjectSchema.optional(), cursor: LanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageScalarFieldEnumSchema, LanguageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LanguageFindFirstOrThrowArgs>;

export const LanguageFindFirstOrThrowZodSchema = z.object({ select: LanguageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LanguageIncludeObjectSchema.optional()), orderBy: z.union([LanguageOrderByWithRelationInputObjectSchema, LanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageWhereInputObjectSchema.optional(), cursor: LanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LanguageScalarFieldEnumSchema, LanguageScalarFieldEnumSchema.array()]).optional() }).strict();