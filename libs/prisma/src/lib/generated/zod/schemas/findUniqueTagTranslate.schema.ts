import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './objects/TagTranslateInclude.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './objects/TagTranslateWhereUniqueInput.schema';

export const TagTranslateFindUniqueSchema: z.ZodType<Prisma.TagTranslateFindUniqueArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagTranslateFindUniqueArgs>;

export const TagTranslateFindUniqueZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema }).strict();