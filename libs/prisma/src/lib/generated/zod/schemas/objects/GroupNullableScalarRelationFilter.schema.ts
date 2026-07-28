import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GroupWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => GroupWhereInputObjectSchema).optional().nullable()
}).strict();
export const GroupNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.GroupNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GroupNullableScalarRelationFilter>;
export const GroupNullableScalarRelationFilterObjectZodSchema = makeSchema();
