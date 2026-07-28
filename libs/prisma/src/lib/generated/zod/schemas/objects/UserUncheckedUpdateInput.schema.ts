import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
import { AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AddressUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PhoneUncheckedUpdateManyWithoutUserNestedInputObjectSchema as PhoneUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PhoneUncheckedUpdateManyWithoutUserNestedInput.schema';
import { OrganizationUncheckedUpdateManyWithoutMembersNestedInputObjectSchema as OrganizationUncheckedUpdateManyWithoutMembersNestedInputObjectSchema } from './OrganizationUncheckedUpdateManyWithoutMembersNestedInput.schema';
import { UserUncheckedUpdateManyWithoutManagerNestedInputObjectSchema as UserUncheckedUpdateManyWithoutManagerNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutManagerNestedInput.schema';
import { ProfileUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as ProfileUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { GroupUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema as GroupUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './GroupUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { PostUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema as PostUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema as CommentUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutAuthorNestedInput.schema';
import { StoryUncheckedUpdateManyWithoutUserNestedInputObjectSchema as StoryUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './StoryUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserTodoLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema as UserTodoLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserTodoLinkUncheckedUpdateManyWithoutUserNestedInput.schema';
import { TodoUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema as TodoUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './TodoUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { UserTaskLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema as UserTaskLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserTaskLinkUncheckedUpdateManyWithoutUserNestedInput.schema';
import { TaskUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema as TaskUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './TaskUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { FileUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema as FileUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { FileUncheckedUpdateManyWithoutUploadedByNestedInputObjectSchema as FileUncheckedUpdateManyWithoutUploadedByNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutUploadedByNestedInput.schema';
import { FileUncheckedUpdateManyWithoutProfileUserNestedInputObjectSchema as FileUncheckedUpdateManyWithoutProfileUserNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutProfileUserNestedInput.schema';
import { ChangesTrackingUncheckedUpdateManyWithoutModifiedByNestedInputObjectSchema as ChangesTrackingUncheckedUpdateManyWithoutModifiedByNestedInputObjectSchema } from './ChangesTrackingUncheckedUpdateManyWithoutModifiedByNestedInput.schema';
import { TokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema as TokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TokenUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserSecretUncheckedUpdateOneWithoutUserNestedInputObjectSchema as UserSecretUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './UserSecretUncheckedUpdateOneWithoutUserNestedInput.schema';
import { UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema as UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema as UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema } from './UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInput.schema';
import { UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema as UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ImageUncheckedUpdateManyWithoutUploadedByNestedInputObjectSchema as ImageUncheckedUpdateManyWithoutUploadedByNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutUploadedByNestedInput.schema';
import { ImageUncheckedUpdateManyWithoutProfileUserNestedInputObjectSchema as ImageUncheckedUpdateManyWithoutProfileUserNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutProfileUserNestedInput.schema'

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
  languageId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  managerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Roles: z.union([z.lazy(() => UserUpdateRolesInputObjectSchema), RoleSchema.array()]).optional(),
  Permissions: z.union([z.lazy(() => UserUpdatePermissionsInputObjectSchema), PermissionClaimSchema.array()]).optional(),
  isTfaEnable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  tfaSecret: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  passWordFaker: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  groupId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Address: z.lazy(() => AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Phones: z.lazy(() => PhoneUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Orgs: z.lazy(() => OrganizationUncheckedUpdateManyWithoutMembersNestedInputObjectSchema).optional(),
  Team: z.lazy(() => UserUncheckedUpdateManyWithoutManagerNestedInputObjectSchema).optional(),
  Profiles: z.lazy(() => ProfileUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  Stories: z.lazy(() => StoryUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Todo: z.lazy(() => UserTodoLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  TodosAuthor: z.lazy(() => TodoUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => UserTaskLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  TasksAuthor: z.lazy(() => TaskUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  ownedFiles: z.lazy(() => FileUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
  uploadedFiles: z.lazy(() => FileUncheckedUpdateManyWithoutUploadedByNestedInputObjectSchema).optional(),
  profileFiles: z.lazy(() => FileUncheckedUpdateManyWithoutProfileUserNestedInputObjectSchema).optional(),
  ChangesLogs: z.lazy(() => ChangesTrackingUncheckedUpdateManyWithoutModifiedByNestedInputObjectSchema).optional(),
  Tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ApiKeys: z.lazy(() => ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  userSecret: z.lazy(() => UserSecretUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  Followers: z.lazy(() => UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  Followings: z.lazy(() => UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema).optional(),
  posts_liked: z.lazy(() => UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  uploadedImages: z.lazy(() => ImageUncheckedUpdateManyWithoutUploadedByNestedInputObjectSchema).optional(),
  profileImages: z.lazy(() => ImageUncheckedUpdateManyWithoutProfileUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectZodSchema = makeSchema();
