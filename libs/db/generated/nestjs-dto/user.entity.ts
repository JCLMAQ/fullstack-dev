
import {Gender,Language,PermissionClaim,Position,Prisma,Role,Title} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'
import {PhoneEntity} from './phone.entity'
import {AddressEntity} from './address.entity'
import {OrganizationEntity} from './organization.entity'
import {ProfileEntity} from './profile.entity'
import {GroupEntity} from './group.entity'
import {PostEntity} from './post.entity'
import {CommentEntity} from './comment.entity'
import {StoryEntity} from './story.entity'
import {UserTodoLinkEntity} from './userTodoLink.entity'
import {TodoEntity} from './todo.entity'
import {UserTaskLinkEntity} from './userTaskLink.entity'
import {TaskEntity} from './task.entity'
import {FileEntity} from './file.entity'
import {ChangesTrackingEntity} from './changesTracking.entity'
import {TokenEntity} from './token.entity'
import {ApiKeyEntity} from './apiKey.entity'
import {UserSecretEntity} from './userSecret.entity'
import {UserFollowerEntity} from './userFollower.entity'
import {PostLikeEntity} from './postLike.entity'


export class UserEntity {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
numSeq: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
published: boolean  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
isPublic: boolean  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
isDeleted: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isDeletedDT: Date  | null;
@ApiProperty({
  type: 'string',
})
email: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
lastName: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
firstName: string  | null;
@ApiProperty({
  enum: Title,
  enumName: 'Title',
  nullable: true,
})
title: Title  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
nickName: string  | null;
@ApiProperty({
  enum: Gender,
  enumName: 'Gender',
  nullable: true,
})
Gender: Gender  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
social: Prisma.JsonValue  | null;
@ApiProperty({
  enum: Language,
  enumName: 'Language',
  nullable: true,
})
Language: Language  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
photoUrl: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
dateOfBirth: Date  | null;
@ApiProperty({
  type: 'boolean',
})
hasEmergencyContact: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
emergencyContactName: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
emergencyContactPhone: string  | null;
@ApiProperty({
  type: () => PhoneEntity,
  isArray: true,
  required: false,
})
phone?: PhoneEntity[] ;
@ApiProperty({
  enum: Position,
  enumName: 'Position',
  nullable: true,
})
position: Position  | null;
@ApiProperty({
  type: () => AddressEntity,
  isArray: true,
  required: false,
})
address?: AddressEntity[] ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
jobTitle: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isValidated: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isSuspended: Date  | null;
@ApiProperty({
  type: () => OrganizationEntity,
  isArray: true,
  required: false,
})
Orgs?: OrganizationEntity[] ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
  nullable: true,
})
manager?: UserEntity  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
managerId: string  | null;
@ApiProperty({
  type: () => UserEntity,
  isArray: true,
  required: false,
})
Team?: UserEntity[] ;
@ApiProperty({
  type: () => ProfileEntity,
  isArray: true,
  required: false,
})
Profiles?: ProfileEntity[] ;
@ApiProperty({
  type: () => GroupEntity,
  isArray: true,
  required: false,
})
Groups?: GroupEntity[] ;
@ApiProperty({
  type: () => PostEntity,
  isArray: true,
  required: false,
})
Posts?: PostEntity[] ;
@ApiProperty({
  type: () => CommentEntity,
  isArray: true,
  required: false,
})
Comments?: CommentEntity[] ;
@ApiProperty({
  type: () => StoryEntity,
  isArray: true,
  required: false,
})
Stories?: StoryEntity[] ;
@ApiProperty({
  type: () => UserTodoLinkEntity,
  isArray: true,
  required: false,
})
Todo?: UserTodoLinkEntity[] ;
@ApiProperty({
  type: () => TodoEntity,
  isArray: true,
  required: false,
})
TodosAuthor?: TodoEntity[] ;
@ApiProperty({
  type: () => UserTaskLinkEntity,
  isArray: true,
  required: false,
})
Tasks?: UserTaskLinkEntity[] ;
@ApiProperty({
  type: () => TaskEntity,
  isArray: true,
  required: false,
})
TasksAuthor?: TaskEntity[] ;
@ApiProperty({
  type: () => FileEntity,
  isArray: true,
  required: false,
})
Files?: FileEntity[] ;
@ApiProperty({
  type: () => ChangesTrackingEntity,
  isArray: true,
  required: false,
})
ChangesLogs?: ChangesTrackingEntity[] ;
@ApiProperty({
  isArray: true,
  enum: Role,
  enumName: 'Role',
})
Roles: Role[] ;
@ApiProperty({
  isArray: true,
  enum: PermissionClaim,
  enumName: 'PermissionClaim',
})
Permissions: PermissionClaim[] ;
@ApiProperty({
  type: () => TokenEntity,
  isArray: true,
  required: false,
})
Tokens?: TokenEntity[] ;
@ApiProperty({
  type: () => ApiKeyEntity,
  isArray: true,
  required: false,
})
ApiKeys?: ApiKeyEntity[] ;
@ApiProperty({
  type: 'boolean',
})
isTfaEnable: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tfaSecret: string  | null;
@ApiProperty({
  type: () => UserSecretEntity,
  required: false,
  nullable: true,
})
userSecret?: UserSecretEntity  | null;
@ApiProperty({
  type: () => UserFollowerEntity,
  isArray: true,
  required: false,
})
followers?: UserFollowerEntity[] ;
@ApiProperty({
  type: () => UserFollowerEntity,
  isArray: true,
  required: false,
})
followings?: UserFollowerEntity[] ;
@ApiProperty({
  type: () => PostLikeEntity,
  isArray: true,
  required: false,
})
posts_liked?: PostLikeEntity[] ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
passWordFaker: string  | null;
}
