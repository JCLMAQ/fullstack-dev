import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const orgemailusetoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema), z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema), z.lazy(() => OrgEmailUseToScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  useTo: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isActiv: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  emailOrgId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const OrgEmailUseToScalarWhereInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToScalarWhereInput> = orgemailusetoscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrgEmailUseToScalarWhereInput>;
export const OrgEmailUseToScalarWhereInputObjectZodSchema = orgemailusetoscalarwhereinputSchema;
