import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './objects/TagTranslateInclude.schema';
import { TagTranslateUpdateInputObjectSchema as TagTranslateUpdateInputObjectSchema } from './objects/TagTranslateUpdateInput.schema';
import { TagTranslateUncheckedUpdateInputObjectSchema as TagTranslateUncheckedUpdateInputObjectSchema } from './objects/TagTranslateUncheckedUpdateInput.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './objects/TagTranslateWhereUniqueInput.schema';

export const TagTranslateUpdateOneSchema: z.ZodType<Prisma.TagTranslateUpdateArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), data: z.union([TagTranslateUpdateInputObjectSchema, TagTranslateUncheckedUpdateInputObjectSchema]), where: TagTranslateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagTranslateUpdateArgs>;

export const TagTranslateUpdateOneZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), data: z.union([TagTranslateUpdateInputObjectSchema, TagTranslateUncheckedUpdateInputObjectSchema]), where: TagTranslateWhereUniqueInputObjectSchema }).strict();