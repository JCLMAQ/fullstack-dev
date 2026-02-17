import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './objects/TagTranslateInclude.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './objects/TagTranslateWhereUniqueInput.schema';
import { TagTranslateCreateInputObjectSchema as TagTranslateCreateInputObjectSchema } from './objects/TagTranslateCreateInput.schema';
import { TagTranslateUncheckedCreateInputObjectSchema as TagTranslateUncheckedCreateInputObjectSchema } from './objects/TagTranslateUncheckedCreateInput.schema';
import { TagTranslateUpdateInputObjectSchema as TagTranslateUpdateInputObjectSchema } from './objects/TagTranslateUpdateInput.schema';
import { TagTranslateUncheckedUpdateInputObjectSchema as TagTranslateUncheckedUpdateInputObjectSchema } from './objects/TagTranslateUncheckedUpdateInput.schema';

export const TagTranslateUpsertOneSchema: z.ZodType<Prisma.TagTranslateUpsertArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema, create: z.union([ TagTranslateCreateInputObjectSchema, TagTranslateUncheckedCreateInputObjectSchema ]), update: z.union([ TagTranslateUpdateInputObjectSchema, TagTranslateUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TagTranslateUpsertArgs>;

export const TagTranslateUpsertOneZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), include: TagTranslateIncludeObjectSchema.optional(), where: TagTranslateWhereUniqueInputObjectSchema, create: z.union([ TagTranslateCreateInputObjectSchema, TagTranslateUncheckedCreateInputObjectSchema ]), update: z.union([ TagTranslateUpdateInputObjectSchema, TagTranslateUncheckedUpdateInputObjectSchema ]) }).strict();