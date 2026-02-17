import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LanguageOrderByWithRelationInputObjectSchema as LanguageOrderByWithRelationInputObjectSchema } from './LanguageOrderByWithRelationInput.schema';
import { TagValueOrderByWithRelationInputObjectSchema as TagValueOrderByWithRelationInputObjectSchema } from './TagValueOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  translation: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  language: z.lazy(() => LanguageOrderByWithRelationInputObjectSchema).optional(),
  tagValue: z.lazy(() => TagValueOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TagTranslateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagTranslateOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateOrderByWithRelationInput>;
export const TagTranslateOrderByWithRelationInputObjectZodSchema = makeSchema();
