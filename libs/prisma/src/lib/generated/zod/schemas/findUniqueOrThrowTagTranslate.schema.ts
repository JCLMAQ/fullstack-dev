import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './objects/TagTranslateInclude.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './objects/TagTranslateWhereUniqueInput.schema';

export const TagTranslateFindUniqueOrThrowSchema: z.ZodType<Prisma.TagTranslateFindUniqueOrThrowArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagTranslateFindUniqueOrThrowArgs>;

export const TagTranslateFindUniqueOrThrowZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema }).strict();