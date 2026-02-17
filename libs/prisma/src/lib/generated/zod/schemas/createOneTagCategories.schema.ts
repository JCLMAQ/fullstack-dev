import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesCreateInputObjectSchema as TagCategoriesCreateInputObjectSchema } from './objects/TagCategoriesCreateInput.schema';
import { TagCategoriesUncheckedCreateInputObjectSchema as TagCategoriesUncheckedCreateInputObjectSchema } from './objects/TagCategoriesUncheckedCreateInput.schema';

export const TagCategoriesCreateOneSchema: z.ZodType<Prisma.TagCategoriesCreateArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), data: z.union([TagCategoriesCreateInputObjectSchema, TagCategoriesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TagCategoriesCreateArgs>;

export const TagCategoriesCreateOneZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), data: z.union([TagCategoriesCreateInputObjectSchema, TagCategoriesUncheckedCreateInputObjectSchema]) }).strict();