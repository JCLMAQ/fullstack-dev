import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountAddressArgsObjectSchema as UserCountOutputTypeCountAddressArgsObjectSchema } from './UserCountOutputTypeCountAddressArgs.schema';
import { UserCountOutputTypeCountPhonesArgsObjectSchema as UserCountOutputTypeCountPhonesArgsObjectSchema } from './UserCountOutputTypeCountPhonesArgs.schema';
import { UserCountOutputTypeCountOrgsArgsObjectSchema as UserCountOutputTypeCountOrgsArgsObjectSchema } from './UserCountOutputTypeCountOrgsArgs.schema';
import { UserCountOutputTypeCountTeamArgsObjectSchema as UserCountOutputTypeCountTeamArgsObjectSchema } from './UserCountOutputTypeCountTeamArgs.schema';
import { UserCountOutputTypeCountProfilesArgsObjectSchema as UserCountOutputTypeCountProfilesArgsObjectSchema } from './UserCountOutputTypeCountProfilesArgs.schema';
import { UserCountOutputTypeCountGroupsArgsObjectSchema as UserCountOutputTypeCountGroupsArgsObjectSchema } from './UserCountOutputTypeCountGroupsArgs.schema';
import { UserCountOutputTypeCountPostsArgsObjectSchema as UserCountOutputTypeCountPostsArgsObjectSchema } from './UserCountOutputTypeCountPostsArgs.schema';
import { UserCountOutputTypeCountCommentsArgsObjectSchema as UserCountOutputTypeCountCommentsArgsObjectSchema } from './UserCountOutputTypeCountCommentsArgs.schema';
import { UserCountOutputTypeCountStoriesArgsObjectSchema as UserCountOutputTypeCountStoriesArgsObjectSchema } from './UserCountOutputTypeCountStoriesArgs.schema';
import { UserCountOutputTypeCountTodoArgsObjectSchema as UserCountOutputTypeCountTodoArgsObjectSchema } from './UserCountOutputTypeCountTodoArgs.schema';
import { UserCountOutputTypeCountTodosAuthorArgsObjectSchema as UserCountOutputTypeCountTodosAuthorArgsObjectSchema } from './UserCountOutputTypeCountTodosAuthorArgs.schema';
import { UserCountOutputTypeCountTasksArgsObjectSchema as UserCountOutputTypeCountTasksArgsObjectSchema } from './UserCountOutputTypeCountTasksArgs.schema';
import { UserCountOutputTypeCountTasksAuthorArgsObjectSchema as UserCountOutputTypeCountTasksAuthorArgsObjectSchema } from './UserCountOutputTypeCountTasksAuthorArgs.schema';
import { UserCountOutputTypeCountOwnedFilesArgsObjectSchema as UserCountOutputTypeCountOwnedFilesArgsObjectSchema } from './UserCountOutputTypeCountOwnedFilesArgs.schema';
import { UserCountOutputTypeCountUploadedFilesArgsObjectSchema as UserCountOutputTypeCountUploadedFilesArgsObjectSchema } from './UserCountOutputTypeCountUploadedFilesArgs.schema';
import { UserCountOutputTypeCountProfileFilesArgsObjectSchema as UserCountOutputTypeCountProfileFilesArgsObjectSchema } from './UserCountOutputTypeCountProfileFilesArgs.schema';
import { UserCountOutputTypeCountChangesLogsArgsObjectSchema as UserCountOutputTypeCountChangesLogsArgsObjectSchema } from './UserCountOutputTypeCountChangesLogsArgs.schema';
import { UserCountOutputTypeCountTokensArgsObjectSchema as UserCountOutputTypeCountTokensArgsObjectSchema } from './UserCountOutputTypeCountTokensArgs.schema';
import { UserCountOutputTypeCountApiKeysArgsObjectSchema as UserCountOutputTypeCountApiKeysArgsObjectSchema } from './UserCountOutputTypeCountApiKeysArgs.schema';
import { UserCountOutputTypeCountFollowersArgsObjectSchema as UserCountOutputTypeCountFollowersArgsObjectSchema } from './UserCountOutputTypeCountFollowersArgs.schema';
import { UserCountOutputTypeCountFollowingsArgsObjectSchema as UserCountOutputTypeCountFollowingsArgsObjectSchema } from './UserCountOutputTypeCountFollowingsArgs.schema';
import { UserCountOutputTypeCountPostsLikedArgsObjectSchema as UserCountOutputTypeCountPostsLikedArgsObjectSchema } from './UserCountOutputTypeCountPostsLikedArgs.schema';
import { UserCountOutputTypeCountUploadedImagesArgsObjectSchema as UserCountOutputTypeCountUploadedImagesArgsObjectSchema } from './UserCountOutputTypeCountUploadedImagesArgs.schema';
import { UserCountOutputTypeCountProfileImagesArgsObjectSchema as UserCountOutputTypeCountProfileImagesArgsObjectSchema } from './UserCountOutputTypeCountProfileImagesArgs.schema'

const makeSchema = () => z.object({
  Address: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAddressArgsObjectSchema)]).optional(),
  Phones: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPhonesArgsObjectSchema)]).optional(),
  Orgs: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrgsArgsObjectSchema)]).optional(),
  Team: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTeamArgsObjectSchema)]).optional(),
  Profiles: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountProfilesArgsObjectSchema)]).optional(),
  Groups: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountGroupsArgsObjectSchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPostsArgsObjectSchema)]).optional(),
  Comments: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountCommentsArgsObjectSchema)]).optional(),
  Stories: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountStoriesArgsObjectSchema)]).optional(),
  Todo: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTodoArgsObjectSchema)]).optional(),
  TodosAuthor: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTodosAuthorArgsObjectSchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTasksArgsObjectSchema)]).optional(),
  TasksAuthor: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTasksAuthorArgsObjectSchema)]).optional(),
  ownedFiles: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOwnedFilesArgsObjectSchema)]).optional(),
  uploadedFiles: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountUploadedFilesArgsObjectSchema)]).optional(),
  profileFiles: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountProfileFilesArgsObjectSchema)]).optional(),
  ChangesLogs: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountChangesLogsArgsObjectSchema)]).optional(),
  Tokens: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTokensArgsObjectSchema)]).optional(),
  ApiKeys: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountApiKeysArgsObjectSchema)]).optional(),
  Followers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountFollowersArgsObjectSchema)]).optional(),
  Followings: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountFollowingsArgsObjectSchema)]).optional(),
  posts_liked: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPostsLikedArgsObjectSchema)]).optional(),
  uploadedImages: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountUploadedImagesArgsObjectSchema)]).optional(),
  profileImages: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountProfileImagesArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
