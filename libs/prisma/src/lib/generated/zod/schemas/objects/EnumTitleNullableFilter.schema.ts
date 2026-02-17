import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TitleSchema } from '../enums/Title.schema';
import { NestedEnumTitleNullableFilterObjectSchema as NestedEnumTitleNullableFilterObjectSchema } from './NestedEnumTitleNullableFilter.schema'

const makeSchema = () => z.object({
  equals: TitleSchema.optional().nullable(),
  in: TitleSchema.array().optional().nullable(),
  notIn: TitleSchema.array().optional().nullable(),
  not: z.union([TitleSchema, z.lazy(() => NestedEnumTitleNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumTitleNullableFilterObjectSchema: z.ZodType<Prisma.EnumTitleNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTitleNullableFilter>;
export const EnumTitleNullableFilterObjectZodSchema = makeSchema();
