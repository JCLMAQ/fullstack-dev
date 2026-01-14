import {
  Address,
  ChangesTracking,
  Comment,
  File,
  Group,
  Image,
  Organization,
  PermissionClaim,
  Phone,
  Post,
  PostLike,
  Profile,
  Role,
  Story,
  Task,
  Todo,
  User,
  UserTaskLink,
  UserTodoLink
} from './generated/prisma/client';

export type UserWithRelations = User & {
  Address: Address[];
  Phones: Phone[];
  Orgs: Organization[];
  manager: User | null;
  Team: User[];
  Profiles: Profile[];
  Groups: Group[];
  Posts: Post[];
  Comments: Comment[];
  Stories: Story[];
  Todo: UserTodoLink[];
  TodosAuthor: Todo[];
  Tasks: UserTaskLink[];
  TasksAuthor: Task[];
  ownedFiles: File[];
  uploadedFiles: File[];
  profileFiles: File[];
  ChangesLogs: ChangesTracking[];
  Roles: Role[];
  Permissions: PermissionClaim[];
  Followers: Array<{ user: User }>;
  Followings: Array<{ follower: User }>;
  posts_liked: PostLike[];
  uploadedImages: Image[];
  profileImages: Image[];
};

