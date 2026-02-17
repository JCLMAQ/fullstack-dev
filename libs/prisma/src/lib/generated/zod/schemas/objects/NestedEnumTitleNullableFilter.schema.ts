import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TitleSchema } from '../enums/Title.schema'

const nestedenumtitlenullablefilterSchema = z.object({
  equals: TitleSchema.optional().nullable(),
  in: TitleSchema.array().optional().nullable(),
  notIn: TitleSchema.array().optional().nullable(),
  not: z.union([TitleSchema, z.lazy(() => NestedEnumTitleNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumTitleNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumTitleNullableFilter> = nestedenumtitlenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumTitleNullableFilter>;
export const NestedEnumTitleNullableFilterObjectZodSchema = nestedenumtitlenullablefilterSchema;
