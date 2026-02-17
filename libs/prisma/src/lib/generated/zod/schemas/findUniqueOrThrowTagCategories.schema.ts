import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';

export const TagCategoriesFindUniqueOrThrowSchema: z.ZodType<Prisma.TagCategoriesFindUniqueOrThrowArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagCategoriesFindUniqueOrThrowArgs>;

export const TagCategoriesFindUniqueOrThrowZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema }).strict();