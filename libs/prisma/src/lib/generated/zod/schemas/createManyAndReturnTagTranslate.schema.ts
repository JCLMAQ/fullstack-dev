import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateCreateManyInputObjectSchema as TagTranslateCreateManyInputObjectSchema } from './objects/TagTranslateCreateManyInput.schema';

export const TagTranslateCreateManyAndReturnSchema: z.ZodType<Prisma.TagTranslateCreateManyAndReturnArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), data: z.union([ TagTranslateCreateManyInputObjectSchema, z.array(TagTranslateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TagTranslateCreateManyAndReturnArgs>;

export const TagTranslateCreateManyAndReturnZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), data: z.union([ TagTranslateCreateManyInputObjectSchema, z.array(TagTranslateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();