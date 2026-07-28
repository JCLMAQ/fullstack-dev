import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesCreateManyInputObjectSchema as TagCategoriesCreateManyInputObjectSchema } from './objects/TagCategoriesCreateManyInput.schema';

export const TagCategoriesCreateManyAndReturnSchema: z.ZodType<Prisma.TagCategoriesCreateManyAndReturnArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), data: z.union([ TagCategoriesCreateManyInputObjectSchema, z.array(TagCategoriesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesCreateManyAndReturnArgs>;

export const TagCategoriesCreateManyAndReturnZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), data: z.union([ TagCategoriesCreateManyInputObjectSchema, z.array(TagCategoriesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();