import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TitleSchema } from '../enums/Title.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { PositionSchema } from '../enums/Position.schema';
import { UserCreateRolesInputObjectSchema as UserCreateRolesInputObjectSchema } from './UserCreateRolesInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { UserCreatePermissionsInputObjectSchema as UserCreatePermissionsInputObjectSchema } from './UserCreatePermissionsInput.schema';
import { PermissionClaimSchema } from '../enums/PermissionClaim.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  email: z.string(),
  lastName: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  title: TitleSchema.optional().nullable(),
  nickName: z.string().optional().nullable(),
  Gender: GenderSchema.optional().nullable(),
  social: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  languageId: z.number().int().optional().nullable(),
  photoUrl: z.string().optional().nullable(),
  dateOfBirth: z.coerce.date().optional().nullable(),
  hasEmergencyContact: z.boolean().optional(),
  emergencyContactName: z.string().optional().nullable(),
  emergencyContactPhone: z.string().optional().nullable(),
  position: PositionSchema.optional().nullable(),
  preference: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  jobTitle: z.string().optional().nullable(),
  isValidated: z.coerce.date().optional().nullable(),
  isSuspended: z.coerce.date().optional().nullable(),
  Roles: z.union([z.lazy(() => UserCreateRolesInputObjectSchema), RoleSchema.array()]).optional(),
  Permissions: z.union([z.lazy(() => UserCreatePermissionsInputObjectSchema), PermissionClaimSchema.array()]).optional(),
  isTfaEnable: z.boolean().optional(),
  tfaSecret: z.string().optional().nullable(),
  passWordFaker: z.string().optional().nullable(),
  groupId: z.number().int().optional().nullable()
}).strict();
export const UserCreateManyManagerInputObjectSchema: z.ZodType<Prisma.UserCreateManyManagerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyManagerInput>;
export const UserCreateManyManagerInputObjectZodSchema = makeSchema();
