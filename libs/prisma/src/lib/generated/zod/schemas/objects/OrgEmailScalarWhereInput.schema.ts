import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const orgemailscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrgEmailScalarWhereInputObjectSchema), z.lazy(() => OrgEmailScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrgEmailScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrgEmailScalarWhereInputObjectSchema), z.lazy(() => OrgEmailScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  orgId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const OrgEmailScalarWhereInputObjectSchema: z.ZodType<Prisma.OrgEmailScalarWhereInput> = orgemailscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrgEmailScalarWhereInput>;
export const OrgEmailScalarWhereInputObjectZodSchema = orgemailscalarwhereinputSchema;
