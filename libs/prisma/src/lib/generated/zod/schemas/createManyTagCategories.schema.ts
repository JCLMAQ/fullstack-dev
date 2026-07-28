import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesCreateManyInputObjectSchema as TagCategoriesCreateManyInputObjectSchema } from './objects/TagCategoriesCreateManyInput.schema';

export const TagCategoriesCreateManySchema: z.ZodType<Prisma.TagCategoriesCreateManyArgs> = z.object({ data: z.union([ TagCategoriesCreateManyInputObjectSchema, z.array(TagCategoriesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesCreateManyArgs>;

export const TagCategoriesCreateManyZodSchema = z.object({ data: z.union([ TagCategoriesCreateManyInputObjectSchema, z.array(TagCategoriesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();