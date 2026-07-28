import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { OrgEmailScalarRelationFilterObjectSchema as OrgEmailScalarRelationFilterObjectSchema } from './OrgEmailScalarRelationFilter.schema';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './OrgEmailWhereInput.schema'

const orgemailusetowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrgEmailUseToWhereInputObjectSchema), z.lazy(() => OrgEmailUseToWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrgEmailUseToWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrgEmailUseToWhereInputObjectSchema), z.lazy(() => OrgEmailUseToWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  useTo: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isActiv: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  emailOrgId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  emailOrg: z.union([z.lazy(() => OrgEmailScalarRelationFilterObjectSchema), z.lazy(() => OrgEmailWhereInputObjectSchema)]).optional()
}).strict();
export const OrgEmailUseToWhereInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToWhereInput> = orgemailusetowhereinputSchema as unknown as z.ZodType<Prisma.OrgEmailUseToWhereInput>;
export const OrgEmailUseToWhereInputObjectZodSchema = orgemailusetowhereinputSchema;
