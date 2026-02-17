import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './LanguageArgs.schema';
import { AddressFindManySchema as AddressFindManySchema } from '../findManyAddress.schema';
import { PhoneFindManySchema as PhoneFindManySchema } from '../findManyPhone.schema';
import { OrganizationFindManySchema as OrganizationFindManySchema } from '../findManyOrganization.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { ProfileFindManySchema as ProfileFindManySchema } from '../findManyProfile.schema';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { PostFindManySchema as PostFindManySchema } from '../findManyPost.schema';
import { CommentFindManySchema as CommentFindManySchema } from '../findManyComment.schema';
import { StoryFindManySchema as StoryFindManySchema } from '../findManyStory.schema';
import { UserTodoLinkFindManySchema as UserTodoLinkFindManySchema } from '../findManyUserTodoLink.schema';
import { TodoFindManySchema as TodoFindManySchema } from '../findManyTodo.schema';
import { UserTaskLinkFindManySchema as UserTaskLinkFindManySchema } from '../findManyUserTaskLink.schema';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { ChangesTrackingFindManySchema as ChangesTrackingFindManySchema } from '../findManyChangesTracking.schema';
import { TokenFindManySchema as TokenFindManySchema } from '../findManyToken.schema';
import { ApiKeyFindManySchema as ApiKeyFindManySchema } from '../findManyApiKey.schema';
import { UserSecretArgsObjectSchema as UserSecretArgsObjectSchema } from './UserSecretArgs.schema';
import { UserFollowerLinkFindManySchema as UserFollowerLinkFindManySchema } from '../findManyUserFollowerLink.schema';
import { UserPostLikeLinkFindManySchema as UserPostLikeLinkFindManySchema } from '../findManyUserPostLikeLink.schema';
import { ImageFindManySchema as ImageFindManySchema } from '../findManyImage.schema';
import { GroupArgsObjectSchema as GroupArgsObjectSchema } from './GroupArgs.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional(),
  Address: z.union([z.boolean(), z.lazy(() => AddressFindManySchema)]).optional(),
  Phones: z.union([z.boolean(), z.lazy(() => PhoneFindManySchema)]).optional(),
  Orgs: z.union([z.boolean(), z.lazy(() => OrganizationFindManySchema)]).optional(),
  manager: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
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
  Tokens: z.union([z.boolean(), z.lazy(() => TokenFindManySchema)]).optional(),
  ApiKeys: z.union([z.boolean(), z.lazy(() => ApiKeyFindManySchema)]).optional(),
  userSecret: z.union([z.boolean(), z.lazy(() => UserSecretArgsObjectSchema)]).optional(),
  Followers: z.union([z.boolean(), z.lazy(() => UserFollowerLinkFindManySchema)]).optional(),
  Followings: z.union([z.boolean(), z.lazy(() => UserFollowerLinkFindManySchema)]).optional(),
  posts_liked: z.union([z.boolean(), z.lazy(() => UserPostLikeLinkFindManySchema)]).optional(),
  uploadedImages: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  profileImages: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  group: z.union([z.boolean(), z.lazy(() => GroupArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
