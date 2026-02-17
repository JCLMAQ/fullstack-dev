import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const accountvalidationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountValidationWhereInputObjectSchema), z.lazy(() => AccountValidationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountValidationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountValidationWhereInputObjectSchema), z.lazy(() => AccountValidationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numSeq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isDeleted: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  isValidated: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  emailToken: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  timeStamp: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AccountValidationWhereInputObjectSchema: z.ZodType<Prisma.AccountValidationWhereInput> = accountvalidationwhereinputSchema as unknown as z.ZodType<Prisma.AccountValidationWhereInput>;
export const AccountValidationWhereInputObjectZodSchema = accountvalidationwhereinputSchema;
