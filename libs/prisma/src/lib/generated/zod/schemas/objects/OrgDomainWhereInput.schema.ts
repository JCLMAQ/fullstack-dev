import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema as OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const orgdomainwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrgDomainWhereInputObjectSchema), z.lazy(() => OrgDomainWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrgDomainWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrgDomainWhereInputObjectSchema), z.lazy(() => OrgDomainWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  domainName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  extension: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orgId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  org: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional()
}).strict();
export const OrgDomainWhereInputObjectSchema: z.ZodType<Prisma.OrgDomainWhereInput> = orgdomainwhereinputSchema as unknown as z.ZodType<Prisma.OrgDomainWhereInput>;
export const OrgDomainWhereInputObjectZodSchema = orgdomainwhereinputSchema;
