import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const accountvalidationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountValidationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountValidationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountValidationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountValidationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountValidationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  numSeq: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isDeleted: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  isValidated: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  emailToken: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  timeStamp: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AccountValidationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountValidationScalarWhereWithAggregatesInput> = accountvalidationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountValidationScalarWhereWithAggregatesInput>;
export const AccountValidationScalarWhereWithAggregatesInputObjectZodSchema = accountvalidationscalarwherewithaggregatesinputSchema;
