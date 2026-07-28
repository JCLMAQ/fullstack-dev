import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesUpdateManyMutationInputObjectSchema as TagCategoriesUpdateManyMutationInputObjectSchema } from './objects/TagCategoriesUpdateManyMutationInput.schema';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './objects/TagCategoriesWhereInput.schema';

export const TagCategoriesUpdateManySchema: z.ZodType<Prisma.TagCategoriesUpdateManyArgs> = z.object({ data: TagCategoriesUpdateManyMutationInputObjectSchema, where: TagCategoriesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesUpdateManyArgs>;

export const TagCategoriesUpdateManyZodSchema = z.object({ data: TagCategoriesUpdateManyMutationInputObjectSchema, where: TagCategoriesWhereInputObjectSchema.optional() }).strict();