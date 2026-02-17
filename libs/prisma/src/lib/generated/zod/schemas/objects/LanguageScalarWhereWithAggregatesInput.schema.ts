import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const languagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LanguageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LanguageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LanguageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LanguageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LanguageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const LanguageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LanguageScalarWhereWithAggregatesInput> = languagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LanguageScalarWhereWithAggregatesInput>;
export const LanguageScalarWhereWithAggregatesInputObjectZodSchema = languagescalarwherewithaggregatesinputSchema;
