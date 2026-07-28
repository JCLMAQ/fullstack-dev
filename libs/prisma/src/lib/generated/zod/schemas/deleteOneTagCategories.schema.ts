import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';

export const TagCategoriesDeleteOneSchema: z.ZodType<Prisma.TagCategoriesDeleteArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagCategoriesDeleteArgs>;

export const TagCategoriesDeleteOneZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema }).strict();