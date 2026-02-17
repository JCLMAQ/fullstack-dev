import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';
import { TagCategoriesCreateInputObjectSchema as TagCategoriesCreateInputObjectSchema } from './objects/TagCategoriesCreateInput.schema';
import { TagCategoriesUncheckedCreateInputObjectSchema as TagCategoriesUncheckedCreateInputObjectSchema } from './objects/TagCategoriesUncheckedCreateInput.schema';
import { TagCategoriesUpdateInputObjectSchema as TagCategoriesUpdateInputObjectSchema } from './objects/TagCategoriesUpdateInput.schema';
import { TagCategoriesUncheckedUpdateInputObjectSchema as TagCategoriesUncheckedUpdateInputObjectSchema } from './objects/TagCategoriesUncheckedUpdateInput.schema';

export const TagCategoriesUpsertOneSchema: z.ZodType<Prisma.TagCategoriesUpsertArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema, create: z.union([ TagCategoriesCreateInputObjectSchema, TagCategoriesUncheckedCreateInputObjectSchema ]), update: z.union([ TagCategoriesUpdateInputObjectSchema, TagCategoriesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TagCategoriesUpsertArgs>;

export const TagCategoriesUpsertOneZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), include: TagCategoriesIncludeObjectSchema.optional(), where: TagCategoriesWhereUniqueInputObjectSchema, create: z.union([ TagCategoriesCreateInputObjectSchema, TagCategoriesUncheckedCreateInputObjectSchema ]), update: z.union([ TagCategoriesUpdateInputObjectSchema, TagCategoriesUncheckedUpdateInputObjectSchema ]) }).strict();