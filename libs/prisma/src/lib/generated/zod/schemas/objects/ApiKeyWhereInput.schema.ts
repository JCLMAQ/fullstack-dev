import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ScopeListRelationFilterObjectSchema as ScopeListRelationFilterObjectSchema } from './ScopeListRelationFilter.schema'

const apikeywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  Scopes: z.lazy(() => ScopeListRelationFilterObjectSchema).optional()
}).strict();
export const ApiKeyWhereInputObjectSchema: z.ZodType<Prisma.ApiKeyWhereInput> = apikeywhereinputSchema as unknown as z.ZodType<Prisma.ApiKeyWhereInput>;
export const ApiKeyWhereInputObjectZodSchema = apikeywhereinputSchema;
