import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumTokenTypeWithAggregatesFilterObjectSchema as EnumTokenTypeWithAggregatesFilterObjectSchema } from './EnumTokenTypeWithAggregatesFilter.schema';
import { TokenTypeSchema } from '../enums/TokenType.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tokenscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TokenScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TokenScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TokenScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TokenScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TokenScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tokenId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumTokenTypeWithAggregatesFilterObjectSchema), TokenTypeSchema]).optional(),
  emailToken: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  valid: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  expiration: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TokenScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TokenScalarWhereWithAggregatesInput> = tokenscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TokenScalarWhereWithAggregatesInput>;
export const TokenScalarWhereWithAggregatesInputObjectZodSchema = tokenscalarwherewithaggregatesinputSchema;
