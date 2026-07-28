import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => LanguageWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => LanguageWhereInputObjectSchema).optional().nullable()
}).strict();
export const LanguageNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.LanguageNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LanguageNullableScalarRelationFilter>;
export const LanguageNullableScalarRelationFilterObjectZodSchema = makeSchema();
