import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './objects/TagCategoriesWhereInput.schema';

export const TagCategoriesDeleteManySchema: z.ZodType<Prisma.TagCategoriesDeleteManyArgs> = z.object({ where: TagCategoriesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesDeleteManyArgs>;

export const TagCategoriesDeleteManyZodSchema = z.object({ where: TagCategoriesWhereInputObjectSchema.optional() }).strict();