import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LanguageOrderByWithRelationInputObjectSchema as LanguageOrderByWithRelationInputObjectSchema } from './LanguageOrderByWithRelationInput.schema';
import { AddressOrderByRelationAggregateInputObjectSchema as AddressOrderByRelationAggregateInputObjectSchema } from './AddressOrderByRelationAggregateInput.schema';
import { PhoneOrderByRelationAggregateInputObjectSchema as PhoneOrderByRelationAggregateInputObjectSchema } from './PhoneOrderByRelationAggregateInput.schema';
import { OrganizationOrderByRelationAggregateInputObjectSchema as OrganizationOrderByRelationAggregateInputObjectSchema } from './OrganizationOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { ProfileOrderByRelationAggregateInputObjectSchema as ProfileOrderByRelationAggregateInputObjectSchema } from './ProfileOrderByRelationAggregateInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { PostOrderByRelationAggregateInputObjectSchema as PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema as CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { StoryOrderByRelationAggregateInputObjectSchema as StoryOrderByRelationAggregateInputObjectSchema } from './StoryOrderByRelationAggregateInput.schema';
import { UserTodoLinkOrderByRelationAggregateInputObjectSchema as UserTodoLinkOrderByRelationAggregateInputObjectSchema } from './UserTodoLinkOrderByRelationAggregateInput.schema';
import { TodoOrderByRelationAggregateInputObjectSchema as TodoOrderByRelationAggregateInputObjectSchema } from './TodoOrderByRelationAggregateInput.schema';
import { UserTaskLinkOrderByRelationAggregateInputObjectSchema as UserTaskLinkOrderByRelationAggregateInputObjectSchema } from './UserTaskLinkOrderByRelationAggregateInput.schema';
import { TaskOrderByRelationAggregateInputObjectSchema as TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema';
import { ChangesTrackingOrderByRelationAggregateInputObjectSchema as ChangesTrackingOrderByRelationAggregateInputObjectSchema } from './ChangesTrackingOrderByRelationAggregateInput.schema';
import { TokenOrderByRelationAggregateInputObjectSchema as TokenOrderByRelationAggregateInputObjectSchema } from './TokenOrderByRelationAggregateInput.schema';
import { ApiKeyOrderByRelationAggregateInputObjectSchema as ApiKeyOrderByRelationAggregateInputObjectSchema } from './ApiKeyOrderByRelationAggregateInput.schema';
import { UserSecretOrderByWithRelationInputObjectSchema as UserSecretOrderByWithRelationInputObjectSchema } from './UserSecretOrderByWithRelationInput.schema';
import { UserFollowerLinkOrderByRelationAggregateInputObjectSchema as UserFollowerLinkOrderByRelationAggregateInputObjectSchema } from './UserFollowerLinkOrderByRelationAggregateInput.schema';
import { UserPostLikeLinkOrderByRelationAggregateInputObjectSchema as UserPostLikeLinkOrderByRelationAggregateInputObjectSchema } from './UserPostLikeLinkOrderByRelationAggregateInput.schema';
import { ImageOrderByRelationAggregateInputObjectSchema as ImageOrderByRelationAggregateInputObjectSchema } from './ImageOrderByRelationAggregateInput.schema';
import { GroupOrderByWithRelationInputObjectSchema as GroupOrderByWithRelationInputObjectSchema } from './GroupOrderByWithRelationInput.schema'

const userorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  lastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nickName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  social: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  languageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  photoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateOfBirth: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hasEmergencyContact: SortOrderSchema.optional(),
  emergencyContactName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emergencyContactPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  position: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  preference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  jobTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isValidated: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSuspended: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  managerId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Roles: SortOrderSchema.optional(),
  Permissions: SortOrderSchema.optional(),
  isTfaEnable: SortOrderSchema.optional(),
  tfaSecret: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  passWordFaker: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  groupId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Language: z.lazy(() => LanguageOrderByWithRelationInputObjectSchema).optional(),
  Address: z.lazy(() => AddressOrderByRelationAggregateInputObjectSchema).optional(),
  Phones: z.lazy(() => PhoneOrderByRelationAggregateInputObjectSchema).optional(),
  Orgs: z.lazy(() => OrganizationOrderByRelationAggregateInputObjectSchema).optional(),
  manager: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  Team: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
  Profiles: z.lazy(() => ProfileOrderByRelationAggregateInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  Posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentOrderByRelationAggregateInputObjectSchema).optional(),
  Stories: z.lazy(() => StoryOrderByRelationAggregateInputObjectSchema).optional(),
  Todo: z.lazy(() => UserTodoLinkOrderByRelationAggregateInputObjectSchema).optional(),
  TodosAuthor: z.lazy(() => TodoOrderByRelationAggregateInputObjectSchema).optional(),
  Tasks: z.lazy(() => UserTaskLinkOrderByRelationAggregateInputObjectSchema).optional(),
  TasksAuthor: z.lazy(() => TaskOrderByRelationAggregateInputObjectSchema).optional(),
  ownedFiles: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional(),
  uploadedFiles: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional(),
  profileFiles: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional(),
  ChangesLogs: z.lazy(() => ChangesTrackingOrderByRelationAggregateInputObjectSchema).optional(),
  Tokens: z.lazy(() => TokenOrderByRelationAggregateInputObjectSchema).optional(),
  ApiKeys: z.lazy(() => ApiKeyOrderByRelationAggregateInputObjectSchema).optional(),
  userSecret: z.lazy(() => UserSecretOrderByWithRelationInputObjectSchema).optional(),
  Followers: z.lazy(() => UserFollowerLinkOrderByRelationAggregateInputObjectSchema).optional(),
  Followings: z.lazy(() => UserFollowerLinkOrderByRelationAggregateInputObjectSchema).optional(),
  posts_liked: z.lazy(() => UserPostLikeLinkOrderByRelationAggregateInputObjectSchema).optional(),
  uploadedImages: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional(),
  profileImages: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional(),
  group: z.lazy(() => GroupOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = userorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = userorderbywithrelationinputSchema;
