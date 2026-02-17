import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumTokenTypeFilterObjectSchema as EnumTokenTypeFilterObjectSchema } from './EnumTokenTypeFilter.schema';
import { TokenTypeSchema } from '../enums/TokenType.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const tokenscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TokenScalarWhereInputObjectSchema), z.lazy(() => TokenScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TokenScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TokenScalarWhereInputObjectSchema), z.lazy(() => TokenScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tokenId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumTokenTypeFilterObjectSchema), TokenTypeSchema]).optional(),
  emailToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  valid: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  expiration: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TokenScalarWhereInputObjectSchema: z.ZodType<Prisma.TokenScalarWhereInput> = tokenscalarwhereinputSchema as unknown as z.ZodType<Prisma.TokenScalarWhereInput>;
export const TokenScalarWhereInputObjectZodSchema = tokenscalarwhereinputSchema;
