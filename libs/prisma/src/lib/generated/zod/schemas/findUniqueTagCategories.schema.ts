import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';

export const TagCategoriesFindUniqueSchema: z.ZodType<Prisma.TagCategoriesFindUniqueArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagCategoriesFindUniqueArgs>;

export const TagCategoriesFindUniqueZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema }).strict();