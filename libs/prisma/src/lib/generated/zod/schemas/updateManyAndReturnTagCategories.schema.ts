import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './objects/TagCategoriesSelect.schema';
import { TagCategoriesUpdateManyMutationInputObjectSchema as TagCategoriesUpdateManyMutationInputObjectSchema } from './objects/TagCategoriesUpdateManyMutationInput.schema';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './objects/TagCategoriesWhereInput.schema';

export const TagCategoriesUpdateManyAndReturnSchema: z.ZodType<Prisma.TagCategoriesUpdateManyAndReturnArgs> = z.object({ select: TagCategoriesSelectObjectSchema.optional(), data: TagCategoriesUpdateManyMutationInputObjectSchema, where: TagCategoriesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesUpdateManyAndReturnArgs>;

export const TagCategoriesUpdateManyAndReturnZodSchema = z.object({ select: TagCategoriesSelectObjectSchema.optional(), data: TagCategoriesUpdateManyMutationInputObjectSchema, where: TagCategoriesWhereInputObjectSchema.optional() }).strict();