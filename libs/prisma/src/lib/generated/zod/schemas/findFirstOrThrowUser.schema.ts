import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './objects/LanguageArgs.schema';
import { AddressFindManySchema } from './findManyAddress.schema';
import { PhoneFindManySchema } from './findManyPhone.schema';
import { OrganizationFindManySchema } from './findManyOrganization.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { UserFindManySchema } from './findManyUser.schema';
import { ProfileFindManySchema } from './findManyProfile.schema';
import { GroupFindManySchema } from './findManyGroup.schema';
import { PostFindManySchema } from './findManyPost.schema';
import { CommentFindManySchema } from './findManyComment.schema';
import { StoryFindManySchema } from './findManyStory.schema';
import { UserTodoLinkFindManySchema } from './findManyUserTodoLink.schema';
import { TodoFindManySchema } from './findManyTodo.schema';
import { UserTaskLinkFindManySchema } from './findManyUserTaskLink.schema';
import { TaskFindManySchema } from './findManyTask.schema';
import { FileFindManySchema } from './findManyFile.schema';
import { ChangesTrackingFindManySchema } from './findManyChangesTracking.schema';
import { TokenFindManySchema } from './findManyToken.schema';
import { ApiKeyFindManySchema } from './findManyApiKey.schema';
import { UserSecretArgsObjectSchema as UserSecretArgsObjectSchema } from './objects/UserSecretArgs.schema';
import { UserFollowerLinkFindManySchema } from './findManyUserFollowerLink.schema';
import { UserPostLikeLinkFindManySchema } from './findManyUserPostLikeLink.schema';
import { ImageFindManySchema } from './findManyImage.schema';
import { GroupArgsObjectSchema as GroupArgsObjectSchema } from './objects/GroupArgs.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './objects/UserCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    email: z.boolean().optional(),
    lastName: z.boolean().optional(),
    firstName: z.boolean().optional(),
    title: z.boolean().optional(),
    nickName: z.boolean().optional(),
    Gender: z.boolean().optional(),
    social: z.boolean().optional(),
    Language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional(),
    languageId: z.boolean().optional(),
    photoUrl: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    hasEmergencyContact: z.boolean().optional(),
    emergencyContactName: z.boolean().optional(),
    emergencyContactPhone: z.boolean().optional(),
    position: z.boolean().optional(),
    preference: z.boolean().optional(),
    jobTitle: z.boolean().optional(),
    isValidated: z.boolean().optional(),
    isSuspended: z.boolean().optional(),
    Address: z.union([z.boolean(), z.lazy(() => AddressFindManySchema)]).optional(),
    Phones: z.union([z.boolean(), z.lazy(() => PhoneFindManySchema)]).optional(),
    Orgs: z.union([z.boolean(), z.lazy(() => OrganizationFindManySchema)]).optional(),
    manager: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    managerId: z.boolean().optional(),
    Team: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    Profiles: z.union([z.boolean(), z.lazy(() => ProfileFindManySchema)]).optional(),
    Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
    Stories: z.union([z.boolean(), z.lazy(() => StoryFindManySchema)]).optional(),
    Todo: z.union([z.boolean(), z.lazy(() => UserTodoLinkFindManySchema)]).optional(),
    TodosAuthor: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => UserTaskLinkFindManySchema)]).optional(),
    TasksAuthor: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    ownedFiles: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    uploadedFiles: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    profileFiles: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    ChangesLogs: z.union([z.boolean(), z.lazy(() => ChangesTrackingFindManySchema)]).optional(),
    Roles: z.boolean().optional(),
    Permissions: z.boolean().optional(),
    Tokens: z.union([z.boolean(), z.lazy(() => TokenFindManySchema)]).optional(),
    ApiKeys: z.union([z.boolean(), z.lazy(() => ApiKeyFindManySchema)]).optional(),
    isTfaEnable: z.boolean().optional(),
    tfaSecret: z.boolean().optional(),
    userSecret: z.union([z.boolean(), z.lazy(() => UserSecretArgsObjectSchema)]).optional(),
    Followers: z.union([z.boolean(), z.lazy(() => UserFollowerLinkFindManySchema)]).optional(),
    Followings: z.union([z.boolean(), z.lazy(() => UserFollowerLinkFindManySchema)]).optional(),
    posts_liked: z.union([z.boolean(), z.lazy(() => UserPostLikeLinkFindManySchema)]).optional(),
    passWordFaker: z.boolean().optional(),
    uploadedImages: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    profileImages: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    group: z.union([z.boolean(), z.lazy(() => GroupArgsObjectSchema)]).optional(),
    groupId: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    email: z.boolean().optional(),
    lastName: z.boolean().optional(),
    firstName: z.boolean().optional(),
    title: z.boolean().optional(),
    nickName: z.boolean().optional(),
    Gender: z.boolean().optional(),
    social: z.boolean().optional(),
    Language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional(),
    languageId: z.boolean().optional(),
    photoUrl: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    hasEmergencyContact: z.boolean().optional(),
    emergencyContactName: z.boolean().optional(),
    emergencyContactPhone: z.boolean().optional(),
    position: z.boolean().optional(),
    preference: z.boolean().optional(),
    jobTitle: z.boolean().optional(),
    isValidated: z.boolean().optional(),
    isSuspended: z.boolean().optional(),
    Address: z.union([z.boolean(), z.lazy(() => AddressFindManySchema)]).optional(),
    Phones: z.union([z.boolean(), z.lazy(() => PhoneFindManySchema)]).optional(),
    Orgs: z.union([z.boolean(), z.lazy(() => OrganizationFindManySchema)]).optional(),
    manager: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    managerId: z.boolean().optional(),
    Team: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    Profiles: z.union([z.boolean(), z.lazy(() => ProfileFindManySchema)]).optional(),
    Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
    Stories: z.union([z.boolean(), z.lazy(() => StoryFindManySchema)]).optional(),
    Todo: z.union([z.boolean(), z.lazy(() => UserTodoLinkFindManySchema)]).optional(),
    TodosAuthor: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => UserTaskLinkFindManySchema)]).optional(),
    TasksAuthor: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    ownedFiles: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    uploadedFiles: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    profileFiles: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    ChangesLogs: z.union([z.boolean(), z.lazy(() => ChangesTrackingFindManySchema)]).optional(),
    Roles: z.boolean().optional(),
    Permissions: z.boolean().optional(),
    Tokens: z.union([z.boolean(), z.lazy(() => TokenFindManySchema)]).optional(),
    ApiKeys: z.union([z.boolean(), z.lazy(() => ApiKeyFindManySchema)]).optional(),
    isTfaEnable: z.boolean().optional(),
    tfaSecret: z.boolean().optional(),
    userSecret: z.union([z.boolean(), z.lazy(() => UserSecretArgsObjectSchema)]).optional(),
    Followers: z.union([z.boolean(), z.lazy(() => UserFollowerLinkFindManySchema)]).optional(),
    Followings: z.union([z.boolean(), z.lazy(() => UserFollowerLinkFindManySchema)]).optional(),
    posts_liked: z.union([z.boolean(), z.lazy(() => UserPostLikeLinkFindManySchema)]).optional(),
    passWordFaker: z.boolean().optional(),
    uploadedImages: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    profileImages: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    group: z.union([z.boolean(), z.lazy(() => GroupArgsObjectSchema)]).optional(),
    groupId: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const UserFindFirstOrThrowSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstOrThrowArgs>;

export const UserFindFirstOrThrowZodSchema = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();