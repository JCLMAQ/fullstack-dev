import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './objects/TagTranslateInclude.schema';
import { TagTranslateCreateInputObjectSchema as TagTranslateCreateInputObjectSchema } from './objects/TagTranslateCreateInput.schema';
import { TagTranslateUncheckedCreateInputObjectSchema as TagTranslateUncheckedCreateInputObjectSchema } from './objects/TagTranslateUncheckedCreateInput.schema';

export const TagTranslateCreateOneSchema: z.ZodType<Prisma.TagTranslateCreateArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), data: z.union([TagTranslateCreateInputObjectSchema, TagTranslateUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TagTranslateCreateArgs>;

export const TagTranslateCreateOneZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), data: z.union([TagTranslateCreateInputObjectSchema, TagTranslateUncheckedCreateInputObjectSchema]) }).strict();