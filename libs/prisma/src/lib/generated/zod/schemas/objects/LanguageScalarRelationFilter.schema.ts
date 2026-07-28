import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => LanguageWhereInputObjectSchema).optional()
}).strict();
export const LanguageScalarRelationFilterObjectSchema: z.ZodType<Prisma.LanguageScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LanguageScalarRelationFilter>;
export const LanguageScalarRelationFilterObjectZodSchema = makeSchema();
