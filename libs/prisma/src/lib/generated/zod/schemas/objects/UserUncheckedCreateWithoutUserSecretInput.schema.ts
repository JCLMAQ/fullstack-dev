import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TitleSchema } from '../enums/Title.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { PositionSchema } from '../enums/Position.schema';
import { UserCreateRolesInputObjectSchema as UserCreateRolesInputObjectSchema } from './UserCreateRolesInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { UserCreatePermissionsInputObjectSchema as UserCreatePermissionsInputObjectSchema } from './UserCreatePermissionsInput.schema';
import { PermissionClaimSchema } from '../enums/PermissionClaim.schema';
import { AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema as AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AddressUncheckedCreateNestedManyWithoutUserInput.schema';
import { PhoneUncheckedCreateNestedManyWithoutUserInputObjectSchema as PhoneUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PhoneUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrganizationUncheckedCreateNestedManyWithoutMembersInputObjectSchema as OrganizationUncheckedCreateNestedManyWithoutMembersInputObjectSchema } from './OrganizationUncheckedCreateNestedManyWithoutMembersInput.schema';
import { UserUncheckedCreateNestedManyWithoutManagerInputObjectSchema as UserUncheckedCreateNestedManyWithoutManagerInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutManagerInput.schema';
import { ProfileUncheckedCreateNestedManyWithoutUsersInputObjectSchema as ProfileUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './ProfileUncheckedCreateNestedManyWithoutUsersInput.schema';
import { GroupUncheckedCreateNestedManyWithoutOwnerInputObjectSchema as GroupUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { PostUncheckedCreateNestedManyWithoutOwnerInputObjectSchema as PostUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { CommentUncheckedCreateNestedManyWithoutAuthorInputObjectSchema as CommentUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutAuthorInput.schema';
import { StoryUncheckedCreateNestedManyWithoutUserInputObjectSchema as StoryUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StoryUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserTodoLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserTodoLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedCreateNestedManyWithoutUserInput.schema';
import { TodoUncheckedCreateNestedManyWithoutOwnerInputObjectSchema as TodoUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { UserTaskLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserTaskLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedCreateNestedManyWithoutUserInput.schema';
import { TaskUncheckedCreateNestedManyWithoutOwnerInputObjectSchema as TaskUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { FileUncheckedCreateNestedManyWithoutOwnerInputObjectSchema as FileUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { FileUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema as FileUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutUploadedByInput.schema';
import { FileUncheckedCreateNestedManyWithoutProfileUserInputObjectSchema as FileUncheckedCreateNestedManyWithoutProfileUserInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutProfileUserInput.schema';
import { ChangesTrackingUncheckedCreateNestedManyWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedCreateNestedManyWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedCreateNestedManyWithoutModifiedByInput.schema';
import { TokenUncheckedCreateNestedManyWithoutUserInputObjectSchema as TokenUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TokenUncheckedCreateNestedManyWithoutUserInput.schema';
import { ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema as ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserFollowerLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserFollowerLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserFollowerLinkUncheckedCreateNestedManyWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedCreateNestedManyWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedCreateNestedManyWithoutFollowerInput.schema';
import { UserPostLikeLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedCreateNestedManyWithoutUserInput.schema';
import { ImageUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema as ImageUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutUploadedByInput.schema';
import { ImageUncheckedCreateNestedManyWithoutProfileUserInputObjectSchema as ImageUncheckedCreateNestedManyWithoutProfileUserInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutProfileUserInput.schema'

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
  managerId: z.string().optional().nullable(),
  Roles: z.union([z.lazy(() => UserCreateRolesInputObjectSchema), RoleSchema.array()]).optional(),
  Permissions: z.union([z.lazy(() => UserCreatePermissionsInputObjectSchema), PermissionClaimSchema.array()]).optional(),
  isTfaEnable: z.boolean().optional(),
  tfaSecret: z.string().optional().nullable(),
  passWordFaker: z.string().optional().nullable(),
  groupId: z.number().int().optional().nullable(),
  Address: z.lazy(() => AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Phones: z.lazy(() => PhoneUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Orgs: z.lazy(() => OrganizationUncheckedCreateNestedManyWithoutMembersInputObjectSchema).optional(),
  Team: z.lazy(() => UserUncheckedCreateNestedManyWithoutManagerInputObjectSchema).optional(),
  Profiles: z.lazy(() => ProfileUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  Stories: z.lazy(() => StoryUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Todo: z.lazy(() => UserTodoLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  TodosAuthor: z.lazy(() => TodoUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  Tasks: z.lazy(() => UserTaskLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  TasksAuthor: z.lazy(() => TaskUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  ownedFiles: z.lazy(() => FileUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  uploadedFiles: z.lazy(() => FileUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema).optional(),
  profileFiles: z.lazy(() => FileUncheckedCreateNestedManyWithoutProfileUserInputObjectSchema).optional(),
  ChangesLogs: z.lazy(() => ChangesTrackingUncheckedCreateNestedManyWithoutModifiedByInputObjectSchema).optional(),
  Tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ApiKeys: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Followers: z.lazy(() => UserFollowerLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Followings: z.lazy(() => UserFollowerLinkUncheckedCreateNestedManyWithoutFollowerInputObjectSchema).optional(),
  posts_liked: z.lazy(() => UserPostLikeLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  uploadedImages: z.lazy(() => ImageUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema).optional(),
  profileImages: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProfileUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutUserSecretInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserSecretInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutUserSecretInput>;
export const UserUncheckedCreateWithoutUserSecretInputObjectZodSchema = makeSchema();
