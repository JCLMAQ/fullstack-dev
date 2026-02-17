import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TranslationOrderByRelationAggregateInputObjectSchema as TranslationOrderByRelationAggregateInputObjectSchema } from './TranslationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  slug: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  translations: z.lazy(() => TranslationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WordOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WordOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WordOrderByWithRelationInput>;
export const WordOrderByWithRelationInputObjectZodSchema = makeSchema();
