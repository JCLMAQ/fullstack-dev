import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const TagCategoriesWhereUniqueInputObjectSchema: z.ZodType<Prisma.TagCategoriesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesWhereUniqueInput>;
export const TagCategoriesWhereUniqueInputObjectZodSchema = makeSchema();
