import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagTranslateCreateManyInputObjectSchema as TagTranslateCreateManyInputObjectSchema } from './objects/TagTranslateCreateManyInput.schema';

export const TagTranslateCreateManySchema: z.ZodType<Prisma.TagTranslateCreateManyArgs> = z.object({ data: z.union([ TagTranslateCreateManyInputObjectSchema, z.array(TagTranslateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TagTranslateCreateManyArgs>;

export const TagTranslateCreateManyZodSchema = z.object({ data: z.union([ TagTranslateCreateManyInputObjectSchema, z.array(TagTranslateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();