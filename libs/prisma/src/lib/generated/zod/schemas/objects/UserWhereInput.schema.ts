import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
import { EnumPermissionClaimNullableListFilterObjectSchema as EnumPermissionClaimNullableListFilterObjectSchema } from './EnumPermissionClaimNullableListFilter.schema';
import { LanguageNullableScalarRelationFilterObjectSchema as LanguageNullableScalarRelationFilterObjectSchema } from './LanguageNullableScalarRelationFilter.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema';
import { AddressListRelationFilterObjectSchema as AddressListRelationFilterObjectSchema } from './AddressListRelationFilter.schema';
import { PhoneListRelationFilterObjectSchema as PhoneListRelationFilterObjectSchema } from './PhoneListRelationFilter.schema';
import { OrganizationListRelationFilterObjectSchema as OrganizationListRelationFilterObjectSchema } from './OrganizationListRelationFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ProfileListRelationFilterObjectSchema as ProfileListRelationFilterObjectSchema } from './ProfileListRelationFilter.schema';
import { GroupListRelationFilterObjectSchema as GroupListRelationFilterObjectSchema } from './GroupListRelationFilter.schema';
import { PostListRelationFilterObjectSchema as PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';
import { CommentListRelationFilterObjectSchema as CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { StoryListRelationFilterObjectSchema as StoryListRelationFilterObjectSchema } from './StoryListRelationFilter.schema';
import { UserTodoLinkListRelationFilterObjectSchema as UserTodoLinkListRelationFilterObjectSchema } from './UserTodoLinkListRelationFilter.schema';
import { TodoListRelationFilterObjectSchema as TodoListRelationFilterObjectSchema } from './TodoListRelationFilter.schema';
import { UserTaskLinkListRelationFilterObjectSchema as UserTaskLinkListRelationFilterObjectSchema } from './UserTaskLinkListRelationFilter.schema';
import { TaskListRelationFilterObjectSchema as TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';
import { FileListRelationFilterObjectSchema as FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema';
import { ChangesTrackingListRelationFilterObjectSchema as ChangesTrackingListRelationFilterObjectSchema } from './ChangesTrackingListRelationFilter.schema';
import { TokenListRelationFilterObjectSchema as TokenListRelationFilterObjectSchema } from './TokenListRelationFilter.schema';
import { ApiKeyListRelationFilterObjectSchema as ApiKeyListRelationFilterObjectSchema } from './ApiKeyListRelationFilter.schema';
import { UserSecretNullableScalarRelationFilterObjectSchema as UserSecretNullableScalarRelationFilterObjectSchema } from './UserSecretNullableScalarRelationFilter.schema';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './UserSecretWhereInput.schema';
import { UserFollowerLinkListRelationFilterObjectSchema as UserFollowerLinkListRelationFilterObjectSchema } from './UserFollowerLinkListRelationFilter.schema';
import { UserPostLikeLinkListRelationFilterObjectSchema as UserPostLikeLinkListRelationFilterObjectSchema } from './UserPostLikeLinkListRelationFilter.schema';
import { ImageListRelationFilterObjectSchema as ImageListRelationFilterObjectSchema } from './ImageListRelationFilter.schema';
import { GroupNullableScalarRelationFilterObjectSchema as GroupNullableScalarRelationFilterObjectSchema } from './GroupNullableScalarRelationFilter.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
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
  groupId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Language: z.union([z.lazy(() => LanguageNullableScalarRelationFilterObjectSchema), z.lazy(() => LanguageWhereInputObjectSchema)]).optional(),
  Address: z.lazy(() => AddressListRelationFilterObjectSchema).optional(),
  Phones: z.lazy(() => PhoneListRelationFilterObjectSchema).optional(),
  Orgs: z.lazy(() => OrganizationListRelationFilterObjectSchema).optional(),
  manager: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  Team: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  Profiles: z.lazy(() => ProfileListRelationFilterObjectSchema).optional(),
  Groups: z.lazy(() => GroupListRelationFilterObjectSchema).optional(),
  Posts: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  Comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
  Stories: z.lazy(() => StoryListRelationFilterObjectSchema).optional(),
  Todo: z.lazy(() => UserTodoLinkListRelationFilterObjectSchema).optional(),
  TodosAuthor: z.lazy(() => TodoListRelationFilterObjectSchema).optional(),
  Tasks: z.lazy(() => UserTaskLinkListRelationFilterObjectSchema).optional(),
  TasksAuthor: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
  ownedFiles: z.lazy(() => FileListRelationFilterObjectSchema).optional(),
  uploadedFiles: z.lazy(() => FileListRelationFilterObjectSchema).optional(),
  profileFiles: z.lazy(() => FileListRelationFilterObjectSchema).optional(),
  ChangesLogs: z.lazy(() => ChangesTrackingListRelationFilterObjectSchema).optional(),
  Tokens: z.lazy(() => TokenListRelationFilterObjectSchema).optional(),
  ApiKeys: z.lazy(() => ApiKeyListRelationFilterObjectSchema).optional(),
  userSecret: z.union([z.lazy(() => UserSecretNullableScalarRelationFilterObjectSchema), z.lazy(() => UserSecretWhereInputObjectSchema)]).optional(),
  Followers: z.lazy(() => UserFollowerLinkListRelationFilterObjectSchema).optional(),
  Followings: z.lazy(() => UserFollowerLinkListRelationFilterObjectSchema).optional(),
  posts_liked: z.lazy(() => UserPostLikeLinkListRelationFilterObjectSchema).optional(),
  uploadedImages: z.lazy(() => ImageListRelationFilterObjectSchema).optional(),
  profileImages: z.lazy(() => ImageListRelationFilterObjectSchema).optional(),
  group: z.union([z.lazy(() => GroupNullableScalarRelationFilterObjectSchema), z.lazy(() => GroupWhereInputObjectSchema)]).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
