import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './objects/TagTranslateInclude.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './objects/TagTranslateWhereUniqueInput.schema';

export const TagTranslateDeleteOneSchema: z.ZodType<Prisma.TagTranslateDeleteArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagTranslateDeleteArgs>;

export const TagTranslateDeleteOneZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema }).strict();