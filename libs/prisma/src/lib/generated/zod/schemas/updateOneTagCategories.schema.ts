import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesUpdateInputObjectSchema as TagCategoriesUpdateInputObjectSchema } from './objects/TagCategoriesUpdateInput.schema';
import { TagCategoriesUncheckedUpdateInputObjectSchema as TagCategoriesUncheckedUpdateInputObjectSchema } from './objects/TagCategoriesUncheckedUpdateInput.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';

export const TagCategoriesUpdateOneSchema: z.ZodType<Prisma.TagCategoriesUpdateArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), data: z.union([TagCategoriesUpdateInputObjectSchema, TagCategoriesUncheckedUpdateInputObjectSchema]), where: TagCategoriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagCategoriesUpdateArgs>;

export const TagCategoriesUpdateOneZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), data: z.union([TagCategoriesUpdateInputObjectSchema, TagCategoriesUncheckedUpdateInputObjectSchema]), where: TagCategoriesWhereUniqueInputObjectSchema }).strict();