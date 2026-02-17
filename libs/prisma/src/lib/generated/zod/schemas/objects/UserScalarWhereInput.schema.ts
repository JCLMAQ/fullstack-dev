import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumTitleNullableFilterObjectSchema as EnumTitleNullableFilterObjectSchema } from './EnumTitleNullableFilter.schema';
import { TitleSchema } from '../enums/Title.schema';
import { EnumGenderNullableFilterObjectSchema as EnumGenderNullableFilterObjectSchema } from './EnumGenderNullableFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumPositionNullableFilterObjectSchema as EnumPositionNullableFilterObjectSchema } from './EnumPositionNullableFilter.schema';
import { PositionSchema } from '../enums/Position.schema';
import { EnumRoleNullableListFilterObjectSchema as EnumRoleNullableListFilterObjectSchema } from './EnumRoleNullableListFilter.schema';
import { EnumPermissionClaimNullableListFilterObjectSchema as EnumPermissionClaimNullableListFilterObjectSchema } from './EnumPermissionClaimNullableListFilter.schema'

const userscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numSeq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isDeleted: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => EnumTitleNullableFilterObjectSchema), TitleSchema]).optional().nullable(),
  nickName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Gender: z.union([z.lazy(() => EnumGenderNullableFilterObjectSchema), GenderSchema]).optional().nullable(),
  social: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  languageId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  photoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  dateOfBirth: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  hasEmergencyContact: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  emergencyContactName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  emergencyContactPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  position: z.union([z.lazy(() => EnumPositionNullableFilterObjectSchema), PositionSchema]).optional().nullable(),
  preference: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  jobTitle: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isValidated: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  isSuspended: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  managerId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Roles: z.lazy(() => EnumRoleNullableListFilterObjectSchema).optional(),
  Permissions: z.lazy(() => EnumPermissionClaimNullableListFilterObjectSchema).optional(),
  isTfaEnable: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  tfaSecret: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  passWordFaker: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  groupId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const UserScalarWhereInputObjectSchema: z.ZodType<Prisma.UserScalarWhereInput> = userscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserScalarWhereInput>;
export const UserScalarWhereInputObjectZodSchema = userscalarwhereinputSchema;
