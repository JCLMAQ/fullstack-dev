import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ApiKeyListRelationFilterObjectSchema as ApiKeyListRelationFilterObjectSchema } from './ApiKeyListRelationFilter.schema'

const scopewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScopeWhereInputObjectSchema), z.lazy(() => ScopeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScopeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScopeWhereInputObjectSchema), z.lazy(() => ScopeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ApiKey: z.lazy(() => ApiKeyListRelationFilterObjectSchema).optional()
}).strict();
export const ScopeWhereInputObjectSchema: z.ZodType<Prisma.ScopeWhereInput> = scopewhereinputSchema as unknown as z.ZodType<Prisma.ScopeWhereInput>;
export const ScopeWhereInputObjectZodSchema = scopewhereinputSchema;
