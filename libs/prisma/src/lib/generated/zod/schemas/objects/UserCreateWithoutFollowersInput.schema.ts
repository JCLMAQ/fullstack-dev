import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TitleSchema } from '../enums/Title.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { PositionSchema } from '../enums/Position.schema';
import { UserCreateRolesInputObjectSchema as UserCreateRolesInputObjectSchema } from './UserCreateRolesInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { UserCreatePermissionsInputObjectSchema as UserCreatePermissionsInputObjectSchema } from './UserCreatePermissionsInput.schema';
import { PermissionClaimSchema } from '../enums/PermissionClaim.schema';
import { LanguageCreateNestedOneWithoutUsersInputObjectSchema as LanguageCreateNestedOneWithoutUsersInputObjectSchema } from './LanguageCreateNestedOneWithoutUsersInput.schema';
import { AddressCreateNestedManyWithoutUserInputObjectSchema as AddressCreateNestedManyWithoutUserInputObjectSchema } from './AddressCreateNestedManyWithoutUserInput.schema';
import { PhoneCreateNestedManyWithoutUserInputObjectSchema as PhoneCreateNestedManyWithoutUserInputObjectSchema } from './PhoneCreateNestedManyWithoutUserInput.schema';
import { OrganizationCreateNestedManyWithoutMembersInputObjectSchema as OrganizationCreateNestedManyWithoutMembersInputObjectSchema } from './OrganizationCreateNestedManyWithoutMembersInput.schema';
import { UserCreateNestedOneWithoutTeamInputObjectSchema as UserCreateNestedOneWithoutTeamInputObjectSchema } from './UserCreateNestedOneWithoutTeamInput.schema';
import { UserCreateNestedManyWithoutManagerInputObjectSchema as UserCreateNestedManyWithoutManagerInputObjectSchema } from './UserCreateNestedManyWithoutManagerInput.schema';
import { ProfileCreateNestedManyWithoutUsersInputObjectSchema as ProfileCreateNestedManyWithoutUsersInputObjectSchema } from './ProfileCreateNestedManyWithoutUsersInput.schema';
import { GroupCreateNestedManyWithoutOwnerInputObjectSchema as GroupCreateNestedManyWithoutOwnerInputObjectSchema } from './GroupCreateNestedManyWithoutOwnerInput.schema';
import { PostCreateNestedManyWithoutOwnerInputObjectSchema as PostCreateNestedManyWithoutOwnerInputObjectSchema } from './PostCreateNestedManyWithoutOwnerInput.schema';
import { CommentCreateNestedManyWithoutAuthorInputObjectSchema as CommentCreateNestedManyWithoutAuthorInputObjectSchema } from './CommentCreateNestedManyWithoutAuthorInput.schema';
import { StoryCreateNestedManyWithoutUserInputObjectSchema as StoryCreateNestedManyWithoutUserInputObjectSchema } from './StoryCreateNestedManyWithoutUserInput.schema';
import { UserTodoLinkCreateNestedManyWithoutUserInputObjectSchema as UserTodoLinkCreateNestedManyWithoutUserInputObjectSchema } from './UserTodoLinkCreateNestedManyWithoutUserInput.schema';
import { TodoCreateNestedManyWithoutOwnerInputObjectSchema as TodoCreateNestedManyWithoutOwnerInputObjectSchema } from './TodoCreateNestedManyWithoutOwnerInput.schema';
import { UserTaskLinkCreateNestedManyWithoutUserInputObjectSchema as UserTaskLinkCreateNestedManyWithoutUserInputObjectSchema } from './UserTaskLinkCreateNestedManyWithoutUserInput.schema';
import { TaskCreateNestedManyWithoutOwnerInputObjectSchema as TaskCreateNestedManyWithoutOwnerInputObjectSchema } from './TaskCreateNestedManyWithoutOwnerInput.schema';
import { FileCreateNestedManyWithoutOwnerInputObjectSchema as FileCreateNestedManyWithoutOwnerInputObjectSchema } from './FileCreateNestedManyWithoutOwnerInput.schema';
import { FileCreateNestedManyWithoutUploadedByInputObjectSchema as FileCreateNestedManyWithoutUploadedByInputObjectSchema } from './FileCreateNestedManyWithoutUploadedByInput.schema';
import { FileCreateNestedManyWithoutProfileUserInputObjectSchema as FileCreateNestedManyWithoutProfileUserInputObjectSchema } from './FileCreateNestedManyWithoutProfileUserInput.schema';
import { ChangesTrackingCreateNestedManyWithoutModifiedByInputObjectSchema as ChangesTrackingCreateNestedManyWithoutModifiedByInputObjectSchema } from './ChangesTrackingCreateNestedManyWithoutModifiedByInput.schema';
import { TokenCreateNestedManyWithoutUserInputObjectSchema as TokenCreateNestedManyWithoutUserInputObjectSchema } from './TokenCreateNestedManyWithoutUserInput.schema';
import { ApiKeyCreateNestedManyWithoutUserInputObjectSchema as ApiKeyCreateNestedManyWithoutUserInputObjectSchema } from './ApiKeyCreateNestedManyWithoutUserInput.schema';
import { UserSecretCreateNestedOneWithoutUserInputObjectSchema as UserSecretCreateNestedOneWithoutUserInputObjectSchema } from './UserSecretCreateNestedOneWithoutUserInput.schema';
import { UserFollowerLinkCreateNestedManyWithoutFollowerInputObjectSchema as UserFollowerLinkCreateNestedManyWithoutFollowerInputObjectSchema } from './UserFollowerLinkCreateNestedManyWithoutFollowerInput.schema';
import { UserPostLikeLinkCreateNestedManyWithoutUserInputObjectSchema as UserPostLikeLinkCreateNestedManyWithoutUserInputObjectSchema } from './UserPostLikeLinkCreateNestedManyWithoutUserInput.schema';
import { ImageCreateNestedManyWithoutUploadedByInputObjectSchema as ImageCreateNestedManyWithoutUploadedByInputObjectSchema } from './ImageCreateNestedManyWithoutUploadedByInput.schema';
import { ImageCreateNestedManyWithoutProfileUserInputObjectSchema as ImageCreateNestedManyWithoutProfileUserInputObjectSchema } from './ImageCreateNestedManyWithoutProfileUserInput.schema';
import { GroupCreateNestedOneWithoutMembersInputObjectSchema as GroupCreateNestedOneWithoutMembersInputObjectSchema } from './GroupCreateNestedOneWithoutMembersInput.schema'

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
  Language: z.lazy(() => LanguageCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  Address: z.lazy(() => AddressCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Phones: z.lazy(() => PhoneCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Orgs: z.lazy(() => OrganizationCreateNestedManyWithoutMembersInputObjectSchema).optional(),
  manager: z.lazy(() => UserCreateNestedOneWithoutTeamInputObjectSchema).optional(),
  Team: z.lazy(() => UserCreateNestedManyWithoutManagerInputObjectSchema).optional(),
  Profiles: z.lazy(() => ProfileCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  Posts: z.lazy(() => PostCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  Stories: z.lazy(() => StoryCreateNestedManyWithoutUserInputObjectSchema).optional(),
  Todo: z.lazy(() => UserTodoLinkCreateNestedManyWithoutUserInputObjectSchema).optional(),
  TodosAuthor: z.lazy(() => TodoCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  Tasks: z.lazy(() => UserTaskLinkCreateNestedManyWithoutUserInputObjectSchema).optional(),
  TasksAuthor: z.lazy(() => TaskCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  ownedFiles: z.lazy(() => FileCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
  uploadedFiles: z.lazy(() => FileCreateNestedManyWithoutUploadedByInputObjectSchema).optional(),
  profileFiles: z.lazy(() => FileCreateNestedManyWithoutProfileUserInputObjectSchema).optional(),
  ChangesLogs: z.lazy(() => ChangesTrackingCreateNestedManyWithoutModifiedByInputObjectSchema).optional(),
  Tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ApiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutUserInputObjectSchema).optional(),
  userSecret: z.lazy(() => UserSecretCreateNestedOneWithoutUserInputObjectSchema).optional(),
  Followings: z.lazy(() => UserFollowerLinkCreateNestedManyWithoutFollowerInputObjectSchema).optional(),
  posts_liked: z.lazy(() => UserPostLikeLinkCreateNestedManyWithoutUserInputObjectSchema).optional(),
  uploadedImages: z.lazy(() => ImageCreateNestedManyWithoutUploadedByInputObjectSchema).optional(),
  profileImages: z.lazy(() => ImageCreateNestedManyWithoutProfileUserInputObjectSchema).optional(),
  group: z.lazy(() => GroupCreateNestedOneWithoutMembersInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutFollowersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutFollowersInput>;
export const UserCreateWithoutFollowersInputObjectZodSchema = makeSchema();
