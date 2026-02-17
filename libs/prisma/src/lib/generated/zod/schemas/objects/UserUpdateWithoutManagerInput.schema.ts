import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TitleSchema } from '../enums/Title.schema';
import { NullableEnumTitleFieldUpdateOperationsInputObjectSchema as NullableEnumTitleFieldUpdateOperationsInputObjectSchema } from './NullableEnumTitleFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { NullableEnumGenderFieldUpdateOperationsInputObjectSchema as NullableEnumGenderFieldUpdateOperationsInputObjectSchema } from './NullableEnumGenderFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PositionSchema } from '../enums/Position.schema';
import { NullableEnumPositionFieldUpdateOperationsInputObjectSchema as NullableEnumPositionFieldUpdateOperationsInputObjectSchema } from './NullableEnumPositionFieldUpdateOperationsInput.schema';
import { UserUpdateRolesInputObjectSchema as UserUpdateRolesInputObjectSchema } from './UserUpdateRolesInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { UserUpdatePermissionsInputObjectSchema as UserUpdatePermissionsInputObjectSchema } from './UserUpdatePermissionsInput.schema';
import { PermissionClaimSchema } from '../enums/PermissionClaim.schema';
import { LanguageUpdateOneWithoutUsersNestedInputObjectSchema as LanguageUpdateOneWithoutUsersNestedInputObjectSchema } from './LanguageUpdateOneWithoutUsersNestedInput.schema';
import { AddressUpdateManyWithoutUserNestedInputObjectSchema as AddressUpdateManyWithoutUserNestedInputObjectSchema } from './AddressUpdateManyWithoutUserNestedInput.schema';
import { PhoneUpdateManyWithoutUserNestedInputObjectSchema as PhoneUpdateManyWithoutUserNestedInputObjectSchema } from './PhoneUpdateManyWithoutUserNestedInput.schema';
import { OrganizationUpdateManyWithoutMembersNestedInputObjectSchema as OrganizationUpdateManyWithoutMembersNestedInputObjectSchema } from './OrganizationUpdateManyWithoutMembersNestedInput.schema';
import { UserUpdateManyWithoutManagerNestedInputObjectSchema as UserUpdateManyWithoutManagerNestedInputObjectSchema } from './UserUpdateManyWithoutManagerNestedInput.schema';
import { ProfileUpdateManyWithoutUsersNestedInputObjectSchema as ProfileUpdateManyWithoutUsersNestedInputObjectSchema } from './ProfileUpdateManyWithoutUsersNestedInput.schema';
import { GroupUpdateManyWithoutOwnerNestedInputObjectSchema as GroupUpdateManyWithoutOwnerNestedInputObjectSchema } from './GroupUpdateManyWithoutOwnerNestedInput.schema';
import { PostUpdateManyWithoutOwnerNestedInputObjectSchema as PostUpdateManyWithoutOwnerNestedInputObjectSchema } from './PostUpdateManyWithoutOwnerNestedInput.schema';
import { CommentUpdateManyWithoutAuthorNestedInputObjectSchema as CommentUpdateManyWithoutAuthorNestedInputObjectSchema } from './CommentUpdateManyWithoutAuthorNestedInput.schema';
import { StoryUpdateManyWithoutUserNestedInputObjectSchema as StoryUpdateManyWithoutUserNestedInputObjectSchema } from './StoryUpdateManyWithoutUserNestedInput.schema';
import { UserTodoLinkUpdateManyWithoutUserNestedInputObjectSchema as UserTodoLinkUpdateManyWithoutUserNestedInputObjectSchema } from './UserTodoLinkUpdateManyWithoutUserNestedInput.schema';
import { TodoUpdateManyWithoutOwnerNestedInputObjectSchema as TodoUpdateManyWithoutOwnerNestedInputObjectSchema } from './TodoUpdateManyWithoutOwnerNestedInput.schema';
import { UserTaskLinkUpdateManyWithoutUserNestedInputObjectSchema as UserTaskLinkUpdateManyWithoutUserNestedInputObjectSchema } from './UserTaskLinkUpdateManyWithoutUserNestedInput.schema';
import { TaskUpdateManyWithoutOwnerNestedInputObjectSchema as TaskUpdateManyWithoutOwnerNestedInputObjectSchema } from './TaskUpdateManyWithoutOwnerNestedInput.schema';
import { FileUpdateManyWithoutOwnerNestedInputObjectSchema as FileUpdateManyWithoutOwnerNestedInputObjectSchema } from './FileUpdateManyWithoutOwnerNestedInput.schema';
import { FileUpdateManyWithoutUploadedByNestedInputObjectSchema as FileUpdateManyWithoutUploadedByNestedInputObjectSchema } from './FileUpdateManyWithoutUploadedByNestedInput.schema';
import { FileUpdateManyWithoutProfileUserNestedInputObjectSchema as FileUpdateManyWithoutProfileUserNestedInputObjectSchema } from './FileUpdateManyWithoutProfileUserNestedInput.schema';
import { ChangesTrackingUpdateManyWithoutModifiedByNestedInputObjectSchema as ChangesTrackingUpdateManyWithoutModifiedByNestedInputObjectSchema } from './ChangesTrackingUpdateManyWithoutModifiedByNestedInput.schema';
import { TokenUpdateManyWithoutUserNestedInputObjectSchema as TokenUpdateManyWithoutUserNestedInputObjectSchema } from './TokenUpdateManyWithoutUserNestedInput.schema';
import { ApiKeyUpdateManyWithoutUserNestedInputObjectSchema as ApiKeyUpdateManyWithoutUserNestedInputObjectSchema } from './ApiKeyUpdateManyWithoutUserNestedInput.schema';
import { UserSecretUpdateOneWithoutUserNestedInputObjectSchema as UserSecretUpdateOneWithoutUserNestedInputObjectSchema } from './UserSecretUpdateOneWithoutUserNestedInput.schema';
import { UserFollowerLinkUpdateManyWithoutUserNestedInputObjectSchema as UserFollowerLinkUpdateManyWithoutUserNestedInputObjectSchema } from './UserFollowerLinkUpdateManyWithoutUserNestedInput.schema';
import { UserFollowerLinkUpdateManyWithoutFollowerNestedInputObjectSchema as UserFollowerLinkUpdateManyWithoutFollowerNestedInputObjectSchema } from './UserFollowerLinkUpdateManyWithoutFollowerNestedInput.schema';
import { UserPostLikeLinkUpdateManyWithoutUserNestedInputObjectSchema as UserPostLikeLinkUpdateManyWithoutUserNestedInputObjectSchema } from './UserPostLikeLinkUpdateManyWithoutUserNestedInput.schema';
import { ImageUpdateManyWithoutUploadedByNestedInputObjectSchema as ImageUpdateManyWithoutUploadedByNestedInputObjectSchema } from './ImageUpdateManyWithoutUploadedByNestedInput.schema';
import { ImageUpdateManyWithoutProfileUserNestedInputObjectSchema as ImageUpdateManyWithoutProfileUserNestedInputObjectSchema } from './ImageUpdateManyWithoutProfileUserNestedInput.schema';
import { GroupUpdateOneWithoutMembersNestedInputObjectSchema as GroupUpdateOneWithoutMembersNestedInputObjectSchema } from './GroupUpdateOneWithoutMembersNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeleted: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  firstName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([TitleSchema, z.lazy(() => NullableEnumTitleFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nickName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Gender: z.union([GenderSchema, z.lazy(() => NullableEnumGenderFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  social: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  photoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dateOfBirth: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  hasEmergencyContact: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  emergencyContactName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  emergencyContactPhone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  position: z.union([PositionSchema, z.lazy(() => NullableEnumPositionFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  preference: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  jobTitle: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isValidated: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isSuspended: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Roles: z.union([z.lazy(() => UserUpdateRolesInputObjectSchema), RoleSchema.array()]).optional(),
  Permissions: z.union([z.lazy(() => UserUpdatePermissionsInputObjectSchema), PermissionClaimSchema.array()]).optional(),
  isTfaEnable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  tfaSecret: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  passWordFaker: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Language: z.lazy(() => LanguageUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  Address: z.lazy(() => AddressUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Phones: z.lazy(() => PhoneUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Orgs: z.lazy(() => OrganizationUpdateManyWithoutMembersNestedInputObjectSchema).optional(),
  Team: z.lazy(() => UserUpdateManyWithoutManagerNestedInputObjectSchema).optional(),
  Profiles: z.lazy(() => ProfileUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  Stories: z.lazy(() => StoryUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Todo: z.lazy(() => UserTodoLinkUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  TodosAuthor: z.lazy(() => TodoUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => UserTaskLinkUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  TasksAuthor: z.lazy(() => TaskUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  ownedFiles: z.lazy(() => FileUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  uploadedFiles: z.lazy(() => FileUpdateManyWithoutUploadedByNestedInputObjectSchema).optional(),
  profileFiles: z.lazy(() => FileUpdateManyWithoutProfileUserNestedInputObjectSchema).optional(),
  ChangesLogs: z.lazy(() => ChangesTrackingUpdateManyWithoutModifiedByNestedInputObjectSchema).optional(),
  Tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ApiKeys: z.lazy(() => ApiKeyUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  userSecret: z.lazy(() => UserSecretUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  Followers: z.lazy(() => UserFollowerLinkUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Followings: z.lazy(() => UserFollowerLinkUpdateManyWithoutFollowerNestedInputObjectSchema).optional(),
  posts_liked: z.lazy(() => UserPostLikeLinkUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  uploadedImages: z.lazy(() => ImageUpdateManyWithoutUploadedByNestedInputObjectSchema).optional(),
  profileImages: z.lazy(() => ImageUpdateManyWithoutProfileUserNestedInputObjectSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutManagerInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutManagerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutManagerInput>;
export const UserUpdateWithoutManagerInputObjectZodSchema = makeSchema();
