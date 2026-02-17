import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TranslationOrderByRelationAggregateInputObjectSchema as TranslationOrderByRelationAggregateInputObjectSchema } from './TranslationOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { TagTranslateOrderByRelationAggregateInputObjectSchema as TagTranslateOrderByRelationAggregateInputObjectSchema } from './TagTranslateOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  translations: z.lazy(() => TranslationOrderByRelationAggregateInputObjectSchema).optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const LanguageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LanguageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageOrderByWithRelationInput>;
export const LanguageOrderByWithRelationInputObjectZodSchema = makeSchema();
